import {
  Container,
  createStyles,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import preact from "preact";
import Footer from "../../components/footer";
import HeaderSchule from "../../components/headers/schule";
import PlainTeaser from "../../components/plainTeaser";
import hahn from "../../data/images/hahn.png";
import schnecke from "../../data/images/schnecke.png";
import genossenschafter from "../../data/images/genossenschafter.png";
import ContentTeaserLeft from "../../components/contentTeaserLeft";
import ImageGallery from "../../components/imageGallery";
import ContentTeaserBg from "../../components/contentTeaserBg";
import { PaletteOrColorsType, invert, getColors } from "../../utils";
import TopicTeaser from "../../components/topicTeaser";

const useStyles = makeStyles(() =>
  createStyles({
    margin20: {
      marginBottom: 20,
    },
    margin92: {
      marginTop: 92,
    },
    margin100: {
      marginTop: -200
    },
    margin112: {
      marginTop: 112
    }

  })
);

export default function Schule(): preact.VNode {
  const classes = useStyles();
  const theme = useTheme();
  const teacherTeaserColors = invert(getColors(theme, "yellow"));

  return (
    <Container disableGutters maxWidth={false}>
      <HeaderSchule />
      <ContentTeaserLeft palette="blue" title="Die Bauernhof Schule" image={hahn} imageClassName={classes.margin92}>
        <Typography variant="body1">
          Der Bio-Bauernhof Schmeli befindet sich auf der Biela, 15 Minuten vom Bahnhof Brig entfernt. Es ist ein Milchwirtschaftsbetrieb mit hofeigener Sennerei. Neben den Kühen leben hier auch Schweine, Hühner, Katzen und ein Hund. Esel, Schafe und Pferde eines anderen Betriebes gehören ebenfalls zur Schulgemeinschaft. Das Schulgebäude besteht aus sieben unterschiedlich grossen Zimmern und einer grossen Küche. Den Kindern stehen ausserdem mehrere Aussenplätze,
          ein grosses Tipi und ein Schulgarten zur Verfügung.
          Ein Teil des Schulalltags darf sich direkt auf dem Hof mit den verschiedenen Tieren und im Garten abspielen. Auch wöchentliche Ausflüge in den Wald gehören dazu.
        </Typography>
      </ContentTeaserLeft>
      <ImageGallery />
      <ContentTeaserBg />
      <TopicTeaser to="/home" toText="Replace with correct text" image={genossenschafter} title="Das sind wir" subtitle="Unsere Genossenschafter">
        <Typography variant="body1">
          Von Links nach rechts:<br />Simone Maurer<br />Benedikt Maurer<br />
        </Typography>
      </TopicTeaser>
      <ContentTeaserLeft palette={teacherTeaserColors} title="Das Lehrer-Team" image={schnecke} containerClassName={classes.margin112} imageClassName={classes.margin100}>
        <Typography variant="body1">
          Wir sind ein Team aus engagierten und motivierten Lehrpersonen, die einen grossen Rucksack, prall gefüllt mit vielen und vielfältigen Erfahrungen, mitbringen. Uns steht ein Bauernpaar zur Seite, welches seine Arbeiten auf dem Hof Hand-in-Hand mit dem Schulbetrieb plant und die Kinder aktiv miteinbezieht.
        </Typography>
      </ContentTeaserLeft>
      <PlainTeaser to="/vision" toText="Unsere Vision">
        Wir leben Schule - Mit Menschlichkeit
      </PlainTeaser>
      <Footer />
    </Container>
  );
}