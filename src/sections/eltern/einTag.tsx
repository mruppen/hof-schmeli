import preact from "preact";
import Section from "../../components/section";
import TeaserRow from "../../components/teaserRow";
import SectionTitle from "../../components/titles/sectionTitle";
import bauernhof from "../../data/images/bauernhof.png";
import foerdern from "../../data/images/foerdern.png";
import mittagstisch from "../../data/images/mittagstisch.png";
import schulweg from "../../data/images/schulweg.png";
import unterwegs from "../../data/images/unterwegs.png";
import wachsen from "../../data/images/wachsen.png";
import { TeaserModel } from "../../models/models";

const teasers: TeaserModel[] = [
  {
    image: schulweg,
    title: "Problemloser Schulweg mit dem ÖV",
    text: "Vom Bahnhof Brig mit dem Bus in 15 Minuten auf der Biela. Kurzer gemeinschaftlicher Spaziergang bis zur Schule Bauernhof Schmeli.",
  },
  {
    image: wachsen,
    title: "Täglich Lernlandschaften entdecken",
    text: "Nebst umsetzen von eigenen Projekten werden regelmässig geführte Unterrichts-Sequenzen angeboten, zu denen dein Kind in den Lernlandschaften viel Material zum Vertiefen und Üben findet.",
  },
  {
    image: bauernhof,
    title: "Bauernhof-Schule",
    text: "Kühe auf die Weide begleiten, Esel striegeln, kleine Lämmer streicheln, Schweine füttern, Eier holen, ausmisten. All dies kann erlebt werden.",
  },
  {
    image: unterwegs,
    title: "Auch gerne mal mit der Schule unterwegs",
    text: "Wann immer möglich möchten wir auch ausserschulisches Lernen, Entdecken und Erforschen ermöglichen.",
  },
  {
    image: mittagstisch,
    title: "Ganztagesstruktur mit Mittagstisch",
    text: "Vom Aussäen bis zum Ernten – wie kommt der Salat auf meinen Teller? Gemeinsam kochen und essen stärkt unseren Zusammenhalt. Bei uns kommen Bio- und Demeter-Produkte auf den Tisch.",
  },
  {
    image: foerdern,
    title: "Draussen sein",
    text: "Bewegung an der frischen Luft, entdeckendes, begreifendes Lernen in der Natur – in der direkten Schulumgebung oder auf den wöchentlichen Waldausflügen.",
  },
];

export default function EinTag(): preact.VNode {
  return (
    <Section paddingTop={80} paddingBottom={80} palette="greenInverted">
      <SectionTitle title="Ein Tag im Leben deines Kindes" />
      <TeaserRow teasers={teasers} palette="greenInverted" />
    </Section>
  );
}
