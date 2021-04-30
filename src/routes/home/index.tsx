import {
  Container,
  createStyles,
  makeStyles,
  Typography,
} from "@material-ui/core";
import preact from "preact";
import ContactSubscribe from "../../components/contactSubscribe";
import Footer from "../../components/footer";
import HeaderHome from "../../components/headers/home";
import PlainTeaser from "../../components/plainTeaser";
import QuoteTeaser from "../../components/quoteTeaser";
import TopicTeaser from "../../components/topicTeaser";
import baum from "../../data/images/baum.png";
import milchHolen from "../../data/images/milchHolen.png";
import { homeTeasers } from "../../data/teasers";

const useStyles = makeStyles(() =>
  createStyles({
    margin20: {
      marginBottom: 20,
    },
    margin24: {
      marginBottom: 24,
    },
  })
);

export default function Home(): preact.VNode {
  const classes = useStyles();
  return (
    <Container disableGutters>
      <HeaderHome />
      <TopicTeaser
        image={milchHolen}
        title="So lernt dein Kind"
        to="/"
        toText="Infos für Eltern"
        teasers={homeTeasers}
      >
        <Typography variant="h4" className={classes.margin24}>
          Die Bauernhof-Schule
        </Typography>
        <Typography variant="body1" className={classes.margin24}>
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
      <PlainTeaser to="/helfen" toText="Ich möchte helfen">
        «Um ein Kind grosszuziehen braucht es ein ganzes Dorf»
      </PlainTeaser>
      <Footer />
    </Container>
  );
}
