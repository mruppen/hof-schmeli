import { makeStyles, Typography } from "@material-ui/core";
import ContentTeaserLeft from "components/contentTeaserLeft";
import schnecke from "data/images/schnecke.png";
import preact from "preact";

const useStyles = makeStyles({
  image: {
    marginTop: 92,
  },
  imageSnail: {
    marginTop: -200,
  },
  container: {
    marginTop: 112,
  },
});

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
