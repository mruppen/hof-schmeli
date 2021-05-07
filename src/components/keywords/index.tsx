import {
  Container,
  Grid,
  Hidden,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import preact from "preact";
import flower from "../../data/images/flower.png";
import stichworte from "../../data/images/stichworte.png";
import { useContainerStyles } from "../../hooks";

const useStyles = makeStyles({
  container: {
    backgroundImage: `url(${flower})`,
    backgroundSize: "contain",
    marginTop: 112,
    paddingBottom: 112,
  },
  padding24: {
    paddingTop: 260,
    paddingBottom: 24,
  },
  image: {
    width: "100%",
  },
});

export default function Keywords(): preact.VNode {
  const containerClasses = useContainerStyles((theme: Theme) => {
    return {
      color: theme.palette.blue.main,
      backgroundColor: theme.palette.blue.contrastText,
    };
  });
  const classes = useStyles();

  return (
    <Container
      disableGutters
      maxWidth={false}
      className={clsx(containerClasses.main, classes.container)}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <Typography variant="h2" className={classes.padding24}>
            Mit Blick in die Zukunft
          </Typography>
          <Typography variant="body1">
            Die Zukunft stellt unsere Kinder vor viele und neuartige
            Herausforderungen. Die Schule muss ihnen heute Möglichkeiten bieten,
            vielseitige Kompetenzen und Denkmuster zu entfalten, um diese auch
            meistern zu können.
          </Typography>
        </Grid>
        <Grid item xs={false} sm={1}>
          <Hidden />
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={stichworte} className={classes.image} />
        </Grid>
      </Grid>
    </Container>
  );
}
