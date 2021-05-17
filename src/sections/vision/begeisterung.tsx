import { Grid, Hidden, makeStyles, Typography } from "@material-ui/core";
import preact from "preact";
import Section from "../../components/section";
import SectionTitle from "../../components/titles/sectionTitle";
import schnecke from "../../data/images/schneckeGelb.png";

const useStyles = makeStyles({
  container: {
    backgroundImage: `url(${schnecke})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  space: {
    marginBottom: 24,
  },
});

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
        <Grid item xs={false} sm={7}>
          <Hidden />
        </Grid>
        <Grid item xs={12} sm={5}>
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
