import { makeStyles, Typography } from "@material-ui/core";
import preact from "preact";
import baum from "../../data/images/baum.png";
import ArrowButton from "../arrowButton";
import QuoteTeaser from "../quoteTeaser";

const useStyles = makeStyles({
  space: {
    marginBottom: 20,
  },
});

export default function ZitatBaeumeWurzeln(): preact.VNode {
  const classes = useStyles();
  return (
    <QuoteTeaser image={baum}>
      <Typography variant="h2" className={classes.space}>
        «Bäume brauchen Wurzeln. Ein kleiner Baum kann umso besser wachsen und
        gedeihen, je kräftiger seine Wurzeln sind, mit denen er sich im Erdreich
        verankert und seine Nährstoffe aufnimmt. Nur wenn es einem kleinen Baum
        gelingt, tiefreichende und weit verzweigte Wurzeln auszubilden, wird er
        später auch Wind und Wetter, ja sogar Stürme aushalten können.»
      </Typography>
      <Typography variant="h5" className={classes.space}>
        aus «Wie Kinder heute wachsen» von G. Hüther u. H. Renz-Polster
      </Typography>
      <ArrowButton
        arrow="start"
        palette="yellowInverted"
        variant="outlined"
        to="/leitbild"
      >
        Unser Leitbild
      </ArrowButton>
    </QuoteTeaser>
  );
}
