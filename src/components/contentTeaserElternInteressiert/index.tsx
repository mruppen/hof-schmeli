import { makeStyles, Typography } from "@material-ui/core";
import preact from "preact";
import schulgeld from "../../data/images/schulgeld.png";
import schulstart from "../../data/images/schulstart.png";
import stundenplan from "../../data/images/stundenplan.png";
import { TeaserModel } from "../../models/models";
import Section from "../section";
import TeaserRow from "../teaserRow";

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
    to: "/home",
    toText: "Stundenplan",
  },
  {
    image: schulgeld,
    title: "Schulgeld",
    text: "Gelebte Solidarität heisst auch, dass Elternbeiträge einkommensabhängig sind, damit jeder seinen ihm möglichen Teil beitragen kann, auch wenn das Familienbudget klein ist.",
    to: "/home",
    toText: "Schulgeld",
  },
];

export default function ContentTeaserElternInteressiert(): preact.VNode {
  const classes = useStyles();

  return (
    <Section paddingBottom={80} palette="green">
      <Typography variant="h2" className={classes.padding32}>
        Ich bin interessiert
      </Typography>
      <TeaserRow teasers={teasers} palette="green" />
    </Section>
  );
}
