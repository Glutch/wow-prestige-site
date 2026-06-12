/** A wow-panel with the standard uppercase kicker heading.
 *  `inline` shrink-wraps the panel to its content (the item grids). */
export function Panel({
  heading,
  inline,
  children,
}: {
  heading: string;
  inline?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={`wow-panel rounded-sm px-4 py-3 ${inline ? "inline-block" : ""}`}>
      <p className="mb-2.5 text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground">
        {heading}
      </p>
      {children}
    </div>
  );
}
