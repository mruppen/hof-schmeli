import { makeStyles, Typography } from "@material-ui/core";
import preact from "preact";
import bauernhof from "../../data/images/bauernhof.png";
import foerdern from "../../data/images/foerdern.png";
import mittagstisch from "../../data/images/mittagstisch.png";
import schulweg from "../../data/images/schulweg.png";
import unterwegs from "../../data/images/unterwegs.png";
import wachsen from "../../data/images/wachsen.png";
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
    image: schulweg,
    title: "Problemloser Schulweg mit dem ÖV",
    text:
      "Vom Bahnhof Brig mit dem Bus in 15 Minuten auf der Biela. Kurzer gemeinschaftlicher Spaziergang bis zur Schule Bauernhof Schmeli.",
  },
  {
    image: wachsen,
    title: "Täglich Lernlandschaften entdecken",
    text:
      "Nebst umsetzen von eigenen Projekten werden regelmässig geführte Unterrichts-Sequenzen angeboten, zu denen dein Kind in den Lernlandschaften viel Material zum Vertiefen und Üben findet.",
  },
  {
    image: bauernhof,
    title: "Bauernhof-Schule",
    text:
      "Kühe auf die Weide begleiten, Esel striegeln, kleine Lämmer streicheln, Schweine füttern, Eier holen, ausmisten. All dies kann erlebt werden.",
  },
  {
    image: unterwegs,
    title: "Auch gerne mal mit der Schule unterwegs",
    text:
      "Wann immer möglich möchten wir auch ausserschulisches Lernen, Entdecken und Erforschen ermöglichen.",
  },
  {
    image: mittagstisch,
    title: "Ganztagesstruktur mit Mittagstisch",
    text:
      "Vom Aussäen bis zum Ernten – wie kommt der Salat auf meinen Teller? Gemeinsam kochen und essen stärkt unseren Zusammenhalt. Bei uns kommen Bio- und Demeter-Produkte auf den Tisch.",
  },
  {
    image: foerdern,
    title: "Draussen sein",
    text:
      "Bewegung an der frischen Luft, entdeckendes, begreifendes Lernen in der Natur – in der direkten Schulumgebung oder auf den wöchentlichen Waldausflügen.",
  },
];

export default function ContentImportantAssets(): preact.VNode {
  const classes = useStyles();
  return (
    <Section paddingTop={80} paddingBottom={80} palette="green">
      <Typography variant="h2" className={classes.padding32}>
        Ein Tag im Leben deines Kindes
      </Typography>
      <TeaserRow teasers={teasers} palette="green" />
    </Section>
  );
}
