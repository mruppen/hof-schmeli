import { Grid, Hidden } from "@material-ui/core";
import preact from "preact";
import Section from "../../components/section";
import Teaser from "../../components/teaser";
import TeaserRow from "../../components/teaserRow";
import aeste from "../../data/images/aeste.png";
import leitbild from "../../data/images/leitbild.png";
import stamm from "../../data/images/stamm.png";
import wurzeln from "../../data/images/wurzeln.png";
import { TeaserModel } from "../../models/models";

const documents: TeaserModel[] = [
  //   {
  //     title: "Leitbild",
  //     image: leitbild,
  //     to: "/leitbild",
  //     toText: "Unser Wegweiser für unser Handeln im Schulalltag",
  //   },
  {
    title: "Lernkultur",
    image: wurzeln,
    to: "/documents/Unsere Lernkultur.pdf",
    toText: "Grundkompetenzen dürfen erfahren werden",
    documentLink: true,
  },
  {
    title: "Werte und Grundhaltungen",
    image: stamm,
    to: "/documents/Unsere Werte und Grundhaltungen.pdf",
    toText: "Selbstbestimmt und unterstützt seine Ziele erreichen",
    documentLink: true,
  },
  {
    title: "Methodik",
    image: aeste,
    to: "/documents/Wir leben Schule - unsere Methodik.pdf",
    toText: "Erfahrungswelten eröffnen",
    documentLink: true,
  },
];

export default function Dokumente(): preact.VNode {
  return (
    <Section paddingBottom={80} palette="greenInverted">
      <TeaserRow teasers={documents} palette="greenInverted" />
      <Grid container spacing={2}>
        <Grid item xs={false} sm={4}>
          <Hidden />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Teaser
            title="Leitbild"
            palette="greenInverted"
            image={leitbild}
            to="/leitbild"
            toText="Unser Wegweiser für unser Handeln im Schulalltag"
          />
        </Grid>
      </Grid>
    </Section>
  );
}
