-- Dumps the PrestigeClasses addon data (rulesets + trial journeys) to JSON
-- for the website. The addon repo is the single source of truth.
-- Run from the site root:  lua scripts/dump-data.lua > src/data/classes.json

local ADDON_DIR = "../wow-prestige-classes/PrestigeClasses"

local PC = {}
local function loadmod(path)
    local chunk = assert(loadfile(path))
    chunk("PrestigeClasses", PC)
end
loadmod(ADDON_DIR .. "/Util.lua")
loadmod(ADDON_DIR .. "/Data.lua")
local journeys = io.popen('ls "' .. ADDON_DIR .. '"/Trials/*.lua 2>/dev/null')
for path in journeys:lines() do loadmod(path) end
journeys:close()

-- ---- tiny JSON encoder -----------------------------------------------------
local function isArray(t)
    local n = 0
    for k in pairs(t) do
        if type(k) ~= "number" then return false end
        n = n + 1
    end
    return n == #t
end

local encode
local function encodeString(s)
    return '"' .. s:gsub('[\\"]', '\\%0'):gsub("\n", "\\n") .. '"'
end

encode = function(v, indent)
    local pad = string.rep("  ", indent)
    local padIn = string.rep("  ", indent + 1)
    if type(v) == "string" then return encodeString(v) end
    if type(v) == "number" or type(v) == "boolean" then return tostring(v) end
    if type(v) == "table" then
        if next(v) == nil then return "[]" end
        if isArray(v) then
            local parts = {}
            for _, item in ipairs(v) do
                parts[#parts + 1] = padIn .. encode(item, indent + 1)
            end
            return "[\n" .. table.concat(parts, ",\n") .. "\n" .. pad .. "]"
        end
        local keys = {}
        for k in pairs(v) do keys[#keys + 1] = tostring(k) end
        table.sort(keys)
        local parts = {}
        for _, k in ipairs(keys) do
            local val = v[k] ~= nil and v[k] or v[tonumber(k)]
            parts[#parts + 1] = padIn .. encodeString(k) .. ": " .. encode(val, indent + 1)
        end
        return "{\n" .. table.concat(parts, ",\n") .. "\n" .. pad .. "}"
    end
    return "null"
end

-- ---- shape the export -------------------------------------------------------
local function iconToken(path)
    -- "Interface\\Icons\\Ability_Warrior_SavageBlow" -> "ability_warrior_savageblow"
    return (path:match("Icons\\(.+)$") or path):lower()
end

local export = {}
for _, def in ipairs(PC.Classes) do
    local chapters
    if def.trialChapters then
        chapters = {}
        for i = 0, 4 do
            if def.trialChapters[i] then
                chapters[#chapters + 1] = { index = i, title = def.trialChapters[i] }
            end
        end
    end
    export[#export + 1] = {
        id = def.id,
        name = def.name,
        source = def.source,
        faction = def.faction,
        icon = iconToken(def.icon),
        fantasy = def.fantasy,
        races = def.races,
        classes = def.classes,
        minLevel = def.minLevel,
        forbidSlots = def.forbidSlots,
        maxArmor = def.maxArmor,
        weaponTypes = def.weaponTypes,
        -- mixed table { label = "...", {types=...}, ... } -> normalize here
        weaponProfiles = def.weaponProfiles and {
            label = def.weaponProfiles.label,
            profiles = (function()
                local out = {}
                for _, p in ipairs(def.weaponProfiles) do out[#out + 1] = p end
                return out
            end)(),
        } or nil,
        requireDualWield = def.requireDualWield,
        forbidShield = def.forbidShield,
        rangedTypes = def.rangedTypes,
        requirePet = def.requirePet,
        forbidPet = def.forbidPet,
        requireProfession = def.requireProfession,
        profession = def.profession,
        talents = def.talents,
        honorRules = def.honorRules,
        breakCry = def.breakCry,
        restoreCry = def.restoreCry,
        chapters = chapters,
        trials = def.trials,
    }
end

print(encode(export, 0))
