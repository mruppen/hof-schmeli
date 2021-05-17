import preact from "preact";
import PlainTeaser from "../../components/plainTeaser";

export default function SchuleZitat(): preact.VNode {
  return (
    <PlainTeaser
      to="/documents/Unsere Werte und Grundhaltungen.pdf"
      toText="Unsere Werte und Grundhaltungen"
      documentLink
    >
      Wir leben Schule - Mit Menschlichkeit
    </PlainTeaser>
  );
}
