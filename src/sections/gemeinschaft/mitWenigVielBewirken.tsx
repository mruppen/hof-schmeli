import { makeStyles, Typography } from "@material-ui/core";
import Section from "components/section";
import TopicTeaser from "components/topicTeaser";
import tisch from "data/images/tisch.png";
import { TeaserModel } from "models/models";
import preact from "preact";

const useStyles = makeStyles({
  image: {
    minHeight: 439,
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${tisch})`,
    backgroundSize: "115%",
    backgroundPosition: "-50px center",
  },
  space: {
    marginTop: 20,
  },
});

const teasers: TeaserModel[] = [
  {
    title: "Die Welt zu Gast",
    text: "Es gibt viele Menschen, die ein grosses Fachwissen haben und ihr Wissen und Können teilen und weitergeben wollen. So suchen wir externe Experten, die interessierte Kinder an ihrem Wissen und ihrer Leidenschaft teilhaben lassen. Wir suchen Sie, damit Inhalte unseren Kindern lebensnah vermittelt werden können.",
    // to: "/",
    // toText: "Ich helfe mit",
  },
  {
    title: "Raus in die Welt",
    text: "Mit der Unterstützung dieses Fonds unterstützen Sie das Projekt «Schule unterwegs», bei dem wir uns auf ausserschulische Entdeckungs- und Forschungsreisen begeben wollen.",
    // to: "/",
    // toText: "Ich helfe mit",
  },
  {
    title: "Unterstützungsverein Schule Bauernhof Schmeli",
    text: "Unser Unterstützungsverein hat zum Sinn und Zweck, die Schule Bauernhof Schmeli finanziell, ideell und tatkräftig zu unterstützen. Werden Sie Mitglied!",
    // to: "/",
    // toText: "Ich helfe mit",
  },
];

export default function MitWenigVielBewirken(): preact.VNode {
  const classes = useStyles();
  return (
    <Section paddingBottom={80} palette="greenInverted">
      <TopicTeaser
        imageClass={classes.image}
        title="Mit wenig viel bewirken"
        teasers={teasers}
        to="/documents/Materialspenden für unsere Schulwelten.pdf"
        toText="Materialspenden"
        documentLink
      >
        <Typography variant="body1">
          Wie jede Schule brauchen wir Schulmaterial. Ihr Beitrag hilft uns
          dabei, die Schule Bauernhof Schmeli mit dem nötigen Material für den
          Schulalltag auszurüsten.
        </Typography>
      </TopicTeaser>
      <Typography variant="h4" className={classes.space}>
        Haben wir ihr Interesse geweckt? Wir freuen uns sehr, wenn sie mit uns
        Kontakt aufnehmen.
      </Typography>
    </Section>
  );
}
