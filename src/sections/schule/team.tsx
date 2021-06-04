import { makeStyles, Typography, Theme } from "@material-ui/core";
import ContentTeaserLeft from "components/contentTeaserLeft";
import schnecke from "data/images/schnecke.png";
import preact from "preact";
import { customLg } from "src/data/constants";

const useStyles = makeStyles((theme: Theme) =>({
  imageSnail: {
    marginTop: -200,
    [theme.breakpoints.down("sm")]: {
      marginTop: 0
    }
  },
  container: {
    marginTop: 112,
    [theme.breakpoints.down(customLg)]: {
      marginTop: 80
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 0
    },
  },
}));

export default function Team(): preact.VNode {
  const classes = useStyles();

  return (
    <ContentTeaserLeft
      palette="yellow"
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
  );
}
