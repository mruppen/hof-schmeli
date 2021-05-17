import { makeStyles } from "@material-ui/core";
import preact from "preact";
import Section from "../../components/section";
import TeaserRow from "../../components/teaserRow";
import SectionTitle from "../../components/titles/sectionTitle";
import schulgeld from "../../data/images/schulgeld.png";
import schulstart from "../../data/images/schulstart.png";
import stundenplan from "../../data/images/stundenplan.png";
import { TeaserModel } from "../../models/models";

const useStyles = makeStyles({
  padding32: {
    paddingBottom: 32,
  },
});

const teasers: TeaserModel[] = [
  {
    image: schulstart,
    title: "Schulstart",
    text: "Die Schule Bauernhof Schmeli öffnet ihre Tore im August 2022. Unsere Schule soll dynamisch wachsen dürfen und die Kinder mit ihr. Deshalb starten wir mit Kindern des ersten Zyklus (KG, 1./2.Kl.>>1-4H). Für ältere Geschwisterkinder wären eventuell Ausnahmen möglich.",
  },
  {
    image: stundenplan,
    title: "Stundenplan",
    text: "Wir sind eine Tagesschule mit Mittagstisch. Die Schulzeiten sind an die Fahrpläne des ÖV angepasst. Die Ferienpläne entsprechen den offiziellen Plänen der Schulen Brig und Umgebung. Mittwochs ist schulfrei.",
    to: "/documents/Stundenplan Schule Bauernhof Schmeli.pdf",
    toText: "Stundenplan",
    documentLink: true,
  },
  {
    image: schulgeld,
    title: "Schulgeld",
    text: "Gelebte Solidarität heisst auch, dass Elternbeiträge einkommensabhängig sind, damit jeder seinen ihm möglichen Teil beitragen kann, auch wenn das Familienbudget klein ist.",
    to: "/documents/Schulgeld Schule Bauernhof Schmeli.pdf",
    toText: "Schulgeld",
    documentLink: true,
  },
];

export default function IchBinInteressiert(): preact.VNode {
  return (
    <Section paddingBottom={80} palette="greenInverted">
      <SectionTitle title="Ich bin interessiert" />
      <TeaserRow teasers={teasers} palette="greenInverted" />
    </Section>
  );
}
