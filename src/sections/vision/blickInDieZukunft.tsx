import { Grid, Hidden, makeStyles, Theme, Typography } from "@material-ui/core";
import preact from "preact";
import Section from "../../components/section";
import SectionTitle from "../../components/titles/sectionTitle";
import flower from "../../data/images/flower.png";
import stichworte from "../../data/images/stichworte.png";
import { useContainerStyles } from "../../hooks";

const useStyles = makeStyles({
  container: {
    backgroundImage: `url(${flower})`,
    backgroundSize: "contain",
  },
  image: {
    width: "100%",
  },
  space: {
    marginTop: 260,
  },
});

export default function BlickInDieZukunft(): preact.VNode {
  const containerClasses = useContainerStyles((theme: Theme) => {
    return {
      color: theme.palette.blue.main,
      backgroundColor: theme.palette.blue.contrastText,
    };
  });
  const classes = useStyles();

  return (
    <Section
      paddingBottom={112}
      paddingTop={112}
      palette="blueInverted"
      additionalClassName={classes.container}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
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
        <Grid item xs={false} sm={1}>
          <Hidden />
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={stichworte} className={classes.image} />
        </Grid>
      </Grid>
    </Section>
  );
}
