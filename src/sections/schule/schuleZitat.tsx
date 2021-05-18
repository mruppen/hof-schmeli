import PlainTeaser from "components/plainTeaser";
import preact from "preact";

export default function SchuleZitat(): preact.VNode {
  return (
    <PlainTeaser
      links={[
        {
          to: "/documents/Unsere Werte und Grundhaltungen.pdf",
          label: "Unsere Werte und Grundhaltungen",
          documentLink: true,
        },
        {
          to: "/documents/Wir leben Schule - unsere Methodik.pdf",
          label: "Wir leben Schule - unsere Methodik",
          documentLink: true,
        },
      ]}
    >
      Wir leben Schule - Mit Menschlichkeit
    </PlainTeaser>
  );
}
