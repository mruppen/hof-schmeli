import {
  Container,
  createStyles,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import preact from "preact";
import ContentTeaserLeft from "../../components/contentTeaserLeft";
import ContentTeaserSchule from "../../components/contentTeaserSchule";
import Footer from "../../components/footer";
import HeaderSchule from "../../components/headers/schule";
import ImageGallery from "../../components/imageGallery";
import PersonsList from "../../components/personsList";
import PlainTeaser from "../../components/plainTeaser";
import hahn from "../../data/images/hahn.png";
import schnecke from "../../data/images/schnecke.png";
import { getColors, invert } from "../../utils";

const useStyles = makeStyles(() =>
  createStyles({
    imageRooster: {
      marginTop: 92,
    },
    imageSnail: {
      marginTop: -200,
    },
    container: {
      marginTop: 112,
    },
  })
);

export default function Schule(): preact.VNode {
  const classes = useStyles();
  const theme = useTheme();
  const teacherTeaserColors = invert(getColors(theme, "yellow"));

  return (
    <Container disableGutters maxWidth={false}>
      <HeaderSchule />
      <ContentTeaserLeft
        palette="blue"
        title="Die Bauernhof Schule"
        image={hahn}
        imageClassName={classes.imageRooster}
      >
        <Typography variant="body1">
          Der Bio-Bauernhof Schmeli befindet sich auf der Biela, 15 Minuten vom
          Bahnhof Brig entfernt. Es ist ein Milchwirtschaftsbetrieb mit
          hofeigener Sennerei. Neben den Kühen leben hier auch Schweine, Hühner,
          Katzen und ein Hund. Esel, Schafe und Pferde eines anderen Betriebes
          gehören ebenfalls zur Schulgemeinschaft. Das Schulgebäude besteht aus
          sieben unterschiedlich grossen Zimmern und einer grossen Küche. Den
          Kindern stehen ausserdem mehrere Aussenplätze, ein grosses Tipi und
          ein Schulgarten zur Verfügung. Ein Teil des Schulalltags darf sich
          direkt auf dem Hof mit den verschiedenen Tieren und im Garten
          abspielen. Auch wöchentliche Ausflüge in den Wald gehören dazu.
        </Typography>
      </ContentTeaserLeft>
      <ImageGallery />
      <ContentTeaserSchule />
      <ContentTeaserLeft
        palette={teacherTeaserColors}
        title="Team"
        image={schnecke}
        containerClassName={classes.container}
        imageClassName={classes.imageSnail}
      >
        <Typography variant="body1">
          Wir sind ein Team aus engagierten und motivierten Lehrpersonen, die
          einen grossen Rucksack, prall gefüllt mit vielen und vielfältigen
          Erfahrungen, mitbringen. Uns steht ein Bauernpaar zur Seite, welches
          seine Arbeiten auf dem Hof Hand-in-Hand mit dem Schulbetrieb plant und
          die Kinder aktiv miteinbezieht.
        </Typography>
      </ContentTeaserLeft>
      <PersonsList />
      <PlainTeaser to="/vision" toText="Unsere Werte und Grundhaltungen">
        Wir leben Schule - Mit Menschlichkeit
      </PlainTeaser>
      <Footer />
    </Container>
  );
}
