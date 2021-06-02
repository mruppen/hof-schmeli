import { makeStyles, Theme, Typography } from "@material-ui/core";
import ContentTeaserLeft from "components/contentTeaserLeft";
import hahn from "data/images/hahn.png";
import preact from "preact";

const useStyles = makeStyles((theme: Theme) => ({
  image: {
    marginTop: 92,
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
    },
  },
}));

export default function DieBauernhofSchule(): preact.VNode {
  const classes = useStyles();
  return (
    <ContentTeaserLeft
      palette="blueInverted"
      title="Die Bauernhof Schule"
      image={hahn}
      imageClassName={classes.image}
    >
      <Typography variant="body1">
        Der Bio-Bauernhof Schmeli befindet sich auf der Biela, 15 Minuten vom
        Bahnhof Brig entfernt. Es ist ein Milchwirtschaftsbetrieb mit hofeigener
        Sennerei. Neben den Kühen leben hier auch Schweine, Hühner, Katzen und
        ein Hund. Esel, Schafe und Pferde eines anderen Betriebes gehören
        ebenfalls zur Schulgemeinschaft. Das Schulgebäude besteht aus sieben
        unterschiedlich grossen Zimmern und einer grossen Küche. Den Kindern
        stehen ausserdem mehrere Aussenplätze, ein grosses Tipi und ein
        Schulgarten zur Verfügung. Ein Teil des Schulalltags darf sich direkt
        auf dem Hof mit den verschiedenen Tieren und im Garten abspielen. Auch
        wöchentliche Ausflüge in den Wald gehören dazu.
      </Typography>
    </ContentTeaserLeft>
  );
}
