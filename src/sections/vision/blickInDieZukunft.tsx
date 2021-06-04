import { Grid, Hidden, makeStyles, Theme, Typography } from "@material-ui/core";
import Section from "components/section";
import SectionTitle from "components/titles/sectionTitle";
import flower from "data/images/flower.png";
import stichworte from "data/images/stichworte.png";
import preact from "preact";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundImage: `url(${flower})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      backgroundPositionY: "bottom",
      backgroundPositionX: "right"
    }
  },
  image: {
    width: "100%",
  },
  space: {
    marginTop: 260,
    [theme.breakpoints.down("sm")]: {
      marginTop: 0
    }
  },
}));

export default function BlickInDieZukunft(): preact.VNode {
  const classes = useStyles();

  return (
    <Section
      paddingBottom={112}
      paddingTop={112}
      palette="blueInverted"
      additionalClassName={classes.container}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <SectionTitle
            title="Mit Blick in die Zukunft"
            className={classes.space}
          />
          <Typography variant="body1">
            Die Zukunft stellt unsere Kinder vor viele und neuartige
            Herausforderungen. Die Schule muss ihnen heute Möglichkeiten bieten,
            vielseitige Kompetenzen und Denkmuster zu entfalten, um diese auch
            meistern zu können.
          </Typography>
        </Grid>
        <Hidden smDown>
          <Grid item md={1} />
        </Hidden>
        <Grid item xs={12} md={6}>
          <img src={stichworte} className={classes.image} />
        </Grid>
      </Grid>
    </Section>
  );
}
