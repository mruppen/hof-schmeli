import { Grid, Hidden, makeStyles, Typography, Theme } from "@material-ui/core";
import Section from "components/section";
import SectionTitle from "components/titles/sectionTitle";
import schnecke from "data/images/schneckeGelb.png";
import preact from "preact";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundImage: `url(${schnecke})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    [theme.breakpoints.down("sm")]: {
      backgroundSize: "80%"
    }

  },
  space: {
    marginBottom: 24,
  },
}));

export default function Begeisterung(): preact.VNode {
  const classes = useStyles();

  return (
    <Section
      paddingTop={112}
      paddingBottom={112}
      palette="orange"
      additionalClassName={classes.container}
    >
      <Grid container spacing={2}>
        <Hidden smDown>
          <Grid item md={7} />
        </Hidden>
        <Grid item sm={12} md={5}>
          <SectionTitle title="Und mit Begeisterung, die Kreise zieht" />
          <Typography variant="body1" className={classes.space}>
            Wir möchten nicht nur für die Kinder und Familien, die unsere Schule
            besuchen, dazu beitragen, eine glückliche, zufriedene und
            selbstbestimmte Schulzeit zu erleben. Wir möchten auch Inspiration,
            Mutmacher, Unterstützer von anderen Projekten werden.
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
}
