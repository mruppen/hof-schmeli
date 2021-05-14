import { createStyles, makeStyles, Typography } from "@material-ui/core";
import preact from "preact";
import ContactSubscribe from "../../components/contactSubscribe";
import Footer from "../../components/footer";
import HeaderHome from "../../components/headers/home";
import PlainTeaser from "../../components/plainTeaser";
import QuoteTeaser from "../../components/quoteTeaser";
import Section from "../../components/section";
import ContentTitleH4 from "../../components/titles/contentTitleH4";
import TopicTeaser from "../../components/topicTeaser";
import baum from "../../data/images/baum.png";
import milchHolen from "../../data/images/milchHolen.png";
import { TeaserModel } from "../../models/models";

const useStyles = makeStyles(() =>
  createStyles({
    margin20: {
      marginBottom: 20,
    },
    margin24: {
      marginBottom: 24,
    },
    milchHolenImage: {
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${milchHolen})`,
      backgroundSize: "115%",
      backgroundPosition: "-50px center",
    },
  })
);

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

export default function Home(): preact.VNode {
  const classes = useStyles();
  return (
    <div>
      <HeaderHome />
      <Section palette="green" paddingBottom={80} paddingTop={80}>
        <TopicTeaser
          imageClass={classes.milchHolenImage}
          title="So lernt dein Kind"
          to="/"
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
      <QuoteTeaser image={baum}>
        <Typography variant="h2" className={classes.margin20}>
          «Bäume brauchen Wurzeln. Ein kleiner Baum kann umso besser wachsen und
          gedeihen, je kräftiger seine Wurzeln sind, mit denen er sich im
          Erdreich verankert und seine Nährstoffe aufnimmt. Nur wenn es einem
          kleinen Baum gelingt, tiefreichende und weit verzweigte Wurzeln
          auszubilden, wird er später auch Wind und Wetter, ja sogar Stürme
          aushalten können.»
        </Typography>
        <Typography variant="h5">
          aus «Wie Kinder heute wachsen» von G. Hüther u. H. Renz-Polster
        </Typography>
      </QuoteTeaser>
      <ContactSubscribe />
      <PlainTeaser to="/gemeinschaft" toText="Ich möchte helfen">
        «Um ein Kind grosszuziehen braucht es ein ganzes Dorf»
      </PlainTeaser>
      <Footer />
    </div>
  );
}
