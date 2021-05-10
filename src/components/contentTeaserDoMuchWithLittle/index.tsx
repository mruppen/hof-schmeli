import { makeStyles, Typography } from "@material-ui/core";
import preact from "preact";
import pflanzen from "../../data/images/pflanzen.png";
import { TeaserModel } from "../../models/models";
import Section from "../section";
import TopicTeaser from "../topicTeaser";

const useStyles = makeStyles({
  image: {
    minHeight: 439,
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${pflanzen})`,
    backgroundSize: "115%",
    backgroundPosition: "-50px center",
  },
});

const teasers: TeaserModel[] = [
  {
    title: "Mit wenig viel bewirken",
    text:
      "Wie jede Schule brauchen wir Schulmaterial. Ihr Beitrag hilft uns dabei, die Schule Bauernhof Schmeli mit dem nötigen Material für den Schulalltag auszurüsten.",
    to: "/",
    toText: "Ich helfe mit",
  },
  {
    title: "Raus in die Welt",
    text:
      "Mit der Unterstützung dieses Fonds unterstützen Sie das Projekt «Schule unterwegs», bei dem wir uns auf ausserschulische Entdeckungs- und Forschungsreisen begeben wollen.",
    to: "/",
    toText: "Ich helfe mit",
  },
  {
    title: "Unterstützungsverein Schule Bauernhof Schmeli",
    text:
      "Unser Unterstützungsverein hat zum Sinn und Zweck, die Schule Bauernhof Schmeli finanziell, ideell und tatkräftig zu unterstützen. Werden Sie Mitglied!",
    to: "/",
    toText: "Ich helfe mit",
  },
];

export default function ContentTeaserDoMuchWithLittle(): preact.VNode {
  const classes = useStyles();
  return (
    <Section paddingBottom={80} palette="green">
      <TopicTeaser
        imageClass={classes.image}
        title="Die Welt zu Gast"
        teasers={teasers}
        to="/"
        toText="Ich helfe mit"
      >
        <Typography variant="body1">
          Es gibt viele Menschen, die ein grosses Fachwissen haben und ihr
          Wissen und Können teilen und weitergeben wollen. So suchen wir externe
          Experten, die interessierte Kinder an ihrem Wissen und ihrer
          Leidenschaft teilhaben lassen.
          <br /> Wir suchen&nbsp;<b>Sie</b>, damit Inhalte unseren Kindern
          lebensnah vermittelt werden können.
        </Typography>
      </TopicTeaser>
    </Section>
  );
}
