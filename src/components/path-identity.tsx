import type { PrestigeClass, TalentSpec } from "@/lib/wow";
import { WowIcon } from "@/components/wow-icon";
import {
  raceIcons,
  professionIcons,
  treeIcons,
  talentIcons,
  RACE_LABEL,
} from "@/data/identity";

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
  title,
}: {
  icon?: string;
  label: string;
  sub?: string;
  title?: string;
}) {
  return (
    <li className="flex items-center gap-2.5" title={title}>
      {icon && (
        <span className="block shrink-0 rounded-[6px] border border-black/80 bg-black/60 p-0.5">
          <WowIcon token={icon} size={32} alt={label} />
        </span>
      )}
      <span className="min-w-0 leading-tight">
        <span className="block truncate text-[0.85rem] font-semibold text-foreground/90">
          {label}
        </span>
        {sub && (
          <span className="block text-[0.72rem] text-muted-foreground">{sub}</span>
        )}
      </span>
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

/** Who you must be, what you should train, how you spec — at a glance. */
export function PathIdentity({ c }: { c: PrestigeClass }) {
  const specs = specsOf(c);
  const required = c.requireProfession ?? [];
  const suggested = c.profession ?? [];
  const hasProfessions = required.length > 0 || suggested.length > 0;

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {/* ---- the blood ---- */}
      <Panel heading="The Blood">
        <ul className="space-y-2">
          {(c.races ?? []).map((r) => (
            <Cell
              key={r}
              icon={raceIcons[r]}
              label={raceLabel(r)}
              sub={(c.classes ?? []).map(classLabel).join(" / ")}
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
              />
            ))}
            {suggested.map((p) => (
              <Cell
                key={p}
                icon={professionIcons[p]}
                label={p}
                sub="the path's craft — suggested"
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
                      />
                    )}
                    {(spec.keys ?? []).map((k) => (
                      <Cell
                        key={k.name}
                        icon={talentIcons[k.name]}
                        label={k.rank ? `${k.name} ${k.rank}/${k.rank}` : k.name}
                        sub={`sworn from level ${k.level}`}
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
