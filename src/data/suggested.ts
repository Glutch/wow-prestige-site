// Thematic gear worth chasing on each path — beyond what the deeds demand.
// GENERATED VIEW: the lists live in the addon's journey files (the single
// source of truth) and arrive here via `bun run data` → classes.json.
// Edit Trials/<Class>.lua in the addon repo, not this file.
import { prestigeClasses } from "@/lib/wow";

export type SuggestedItem = { id: number; name: string; note: string };

export const suggestedByClass: Record<string, SuggestedItem[]> =
  Object.fromEntries(prestigeClasses.map((c) => [c.id, c.suggested ?? []]));
