import type { PrestigeClass, TalentSpec } from "@/lib/wow";
import { WowIcon } from "@/components/wow-icon";
import {
  raceIcons,
  professionIcons,
  treeIcons,
  talentIcons,
  RACE_LABEL,
} from "@/data/identity";
import { identityLoreByClass } from "@/data/identity-lore";

function raceLabel(token: string) {
  return RACE_LABEL[token] ?? token;
}

function classLabel(token: string) {
  return token[0] + token.slice(1).toLowerCase();
}

/** talents is either one spec, or one per class token (multi-class paths). */
function specsOf(c: PrestigeClass): { classToken: string; spec: TalentSpec }[] {
  if (!c.talents) return [];
  if ("tree" in c.talents || "keys" in c.talents) {
    return [{ classToken: c.classes?.[0] ?? "", spec: c.talents as TalentSpec }];
  }
  return Object.entries(c.talents as Record<string, TalentSpec>).map(
    ([classToken, spec]) => ({ classToken, spec }),
  );
}

function Cell({
  icon,
  label,
  sub,
  lore,
}: {
  icon?: string;
  label: string;
  sub?: string;
  lore?: string;
}) {
  return (
    // Named group — a bare `group` on an ancestor opens every tooltip at once.
    <li
      className="group/idcell relative flex items-center gap-2.5 hover:z-[9999] focus-within:z-[9999]"
      tabIndex={lore ? 0 : undefined}
    >
      {icon && (
        <span className="block shrink-0 rounded-[6px] border border-black/80 bg-black/60 p-0.5">
          <WowIcon token={icon} size={32} alt={label} />
        </span>
      )}
      <span className="min-w-0 leading-tight">
        <span
          className={`block truncate text-[0.85rem] font-semibold text-foreground/90 ${
            lore ? "cursor-help underline decoration-dotted decoration-gold/40 underline-offset-4" : ""
          }`}
        >
          {label}
        </span>
        {sub && (
          <span className="block text-[0.72rem] text-muted-foreground">{sub}</span>
        )}
      </span>
      {lore && (
        <span className="pointer-events-none invisible absolute right-full top-1/2 z-[9999] mr-3 -translate-y-1/2 opacity-0 transition-opacity duration-150 group-hover/idcell:visible group-hover/idcell:opacity-100 group-focus-within/idcell:visible group-focus-within/idcell:opacity-100 max-lg:left-0 max-lg:right-auto max-lg:top-full max-lg:mr-0 max-lg:mt-2 max-lg:translate-y-0">
          <span className="wow-tooltip block">
            <span className="t-yellow mb-1 block text-[0.85rem] font-semibold">{label}</span>
            <span className="t-lore block italic">{lore}</span>
          </span>
        </span>
      )}
    </li>
  );
}

function Panel({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div className="wow-panel rounded-sm px-4 py-3">
      <p className="mb-2.5 text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground">
        {heading}
      </p>
      {children}
    </div>
  );
}

/** Who you must be, what you should train, how you spec — at a glance.
 *  `stacked` renders the panels as a compact vertical column (used beside
 *  the spoils strip); default is a responsive row of cards. */
export function PathIdentity({ c, stacked }: { c: PrestigeClass; stacked?: boolean }) {
  const specs = specsOf(c);
  const required = c.requireProfession ?? [];
  const suggested = c.profession ?? [];
  const hasProfessions = required.length > 0 || suggested.length > 0;
  const lore = identityLoreByClass[c.id] ?? {};

  return (
    <div
      className={
        stacked ? "flex flex-col gap-3" : "grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
      }
    >
      {/* ---- the blood ---- */}
      <Panel heading="The Blood">
        <ul className="space-y-2">
          {(c.races ?? []).map((r) => (
            <Cell
              key={r}
              icon={raceIcons[r]}
              label={raceLabel(r)}
              sub={(c.classes ?? []).map(classLabel).join(" / ")}
              lore={lore.races?.[r]}
            />
          ))}
          {!c.races && (
            <Cell
              label="Any race"
              sub={(c.classes ?? []).map(classLabel).join(" / ")}
            />
          )}
        </ul>
      </Panel>

      {/* ---- the craft ---- */}
      {hasProfessions && (
        <Panel heading="The Craft">
          <ul className="space-y-2">
            {required.map((p) => (
              <Cell
                key={p}
                icon={professionIcons[p]}
                label={p}
                sub="required — a vow of the path"
                lore={lore.professions?.[p]}
              />
            ))}
            {suggested.map((p) => (
              <Cell
                key={p}
                icon={professionIcons[p]}
                label={p}
                sub="the path's craft — suggested"
                lore={lore.professions?.[p]}
              />
            ))}
          </ul>
        </Panel>
      )}

      {/* ---- the discipline ---- */}
      {specs.length > 0 && (
        <Panel heading="The Discipline">
          <ul className="space-y-2">
            {specs.map(({ classToken, spec }) => {
              const tree = spec.tree;
              return (
                <li key={classToken || "spec"}>
                  <ul className="space-y-2">
                    {tree && (
                      <Cell
                        icon={treeIcons[`${classToken}:${tree.name}`]}
                        label={
                          specs.length > 1
                            ? `${tree.name} (${classLabel(classToken)})`
                            : tree.name
                        }
                        sub={`${tree.points}+ points as you level`}
                        lore={lore.trees?.[`${classToken}:${tree.name}`]}
                      />
                    )}
                    {(spec.keys ?? []).map((k) => (
                      <Cell
                        key={k.name}
                        icon={talentIcons[k.name]}
                        label={k.rank ? `${k.name} ${k.rank}/${k.rank}` : k.name}
                        sub={`sworn from level ${k.level}`}
                        lore={lore.talents?.[k.name]}
                      />
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </Panel>
      )}
    </div>
  );
}
