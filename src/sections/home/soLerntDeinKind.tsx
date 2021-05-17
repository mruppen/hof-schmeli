import { makeStyles, Typography } from "@material-ui/core";
import preact from "preact";
import Section from "../../components/section";
import ContentTitleH4 from "../../components/titles/contentTitleH4";
import TopicTeaser from "../../components/topicTeaser";
import milchHolen from "../../data/images/milchHolen.png";
import { TeaserModel } from "../../models/models";

const useStyles = makeStyles({
  milchHolenImage: {
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${milchHolen})`,
    backgroundSize: "115%",
    backgroundPosition: "-50px center",
  },
});

const homeTeasers: TeaserModel[] = [
  {
    text: "Schule Bauernhof Schmeli- ein Ort des friedlichen und freudigen Zusammenlebens. Wo Menschen sich gegenseitig helfen, ermutigen und bilden. Kinder sich sicher, geborgen und aufgehoben fühlen können.",
    title: "Mit einer klaren Vision",
    to: "/vision",
    toText: "Mehr erfahren",
  },
  {
    text: "In der Schule Bauernhof Schmeli dürfen Kinder Kinder sein. Schulalltag kann mit Lern- und Lebensfreude in naturverbundener Umgebung erlebt werden.",
    title: "In einem lebendigen Umfeld",
    to: "/schule",
    toText: "Mehr erfahren",
  },
  {
    text: "Wir sind eine Schule, die Chancengleichheit für alle Kinder bieten will. Dieses Ziel können wir nur gemeinsam und mit Unterstützung erreichen.",
    title: "Mit Solidarität",
    to: "/gemeinschaft",
    toText: "Mehr erfahren",
  },
];

export default function SoLerntDeinKind(): preact.VNode {
  const classes = useStyles();

  return (
    <Section palette="greenInverted" paddingBottom={80} paddingTop={80}>
      <TopicTeaser
        imageClass={classes.milchHolenImage}
        title="So lernt dein Kind"
        to="/eltern"
        toText="Infos für Eltern"
        teasers={homeTeasers}
      >
        <ContentTitleH4 title="Die Bauernhof-Schule" />
        <Typography variant="body1">
          in einem sicheren und geborgenen Umfeld
          <br />
          angenommen in seiner ureigenen Persönlichkeit
          <br />
          selbstbestimmt, selbstorganisiert, aus eigenem Antrieb mit
          liebevoller, wertschätzender und professioneller Unterstützung
          <br />
          verbunden mit der Natur, den Tieren und der Gemeinschaft
          <br />
        </Typography>
      </TopicTeaser>
    </Section>
  );
}
