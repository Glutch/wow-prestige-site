/** A mock of the death epitaph the addon prints to chat on Hardcore —
 *  the record that outlives the character. */
export function EpitaphCard() {
  return (
    <div className="wow-panel mx-auto max-w-xl rounded-sm p-6 font-mono text-[0.85rem] leading-relaxed">
      <p className="text-muted-foreground">------------------------------------------</p>
      <p className="text-gold">Here fell Dunhelm, Paragon of the Mountain King.</p>
      <p className="text-muted-foreground">Level 60. Walked the path for 84 days.</p>
      <p className="text-quality-uncommon">Every vow honored to the end. Died with honor.</p>
      <p className="text-muted-foreground">23 of 25 deeds of the path done.</p>
      <p className="text-gold">
        Titles earned: Grudgebearer, Grudgekeeper, Stormhammer, Avenger of Khaz
        Modan.
      </p>
      <p className="text-muted-foreground">The grudge counted 214 Dark Iron dead.</p>
      <p className="text-muted-foreground">------------------------------------------</p>
    </div>
  );
}
