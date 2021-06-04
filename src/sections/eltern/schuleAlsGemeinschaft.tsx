import { Grid, Hidden, makeStyles, Theme, Typography } from "@material-ui/core";
import ArrowButton from "components/arrowButton";
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

export default function SchuleAlsGemeinschaft(): preact.VNode {
  const classes = useStyles();

  return (
    <Section
      paddingBottom={112}
      paddingTop={112}
      palette="orange"
      additionalClassName={classes.container}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={5}>
          <SectionTitle title="Die Schule als Gemeinschaft" />
          <Typography variant="body1" className={classes.space}>
            Die Kinder sollen ein vollwertiger Teil der Schulgemeinschaft sein.
            Sie dürfen zu Entscheidungsfindungen beitragen, Mitverantwortung
            tragen, zuhören, sagen, was gesagt werden muss und Respekt erfahren
            und auch zollen.
          </Typography>
          <ArrowButton
            arrow="start"
            palette="orangeInverted"
            variant="outlined"
            documentLink
            to="/documents/Unsere Lernkultur.pdf"
            transparent={true}
          >
            Unsere Lernkultur
          </ArrowButton>
        </Grid>
        <Hidden mdDown>
          <Grid item lg={2} />
        </Hidden>
        <Grid item xs={12} md={6} lg={5}>
          <SectionTitle title="Gelebte Solidarität" />
          <Typography variant="body1" className={classes.space}>
            Wir möchten mit all jenen, die sich mit unserer pädagogischen
            Ausrichtung identifizieren können, ganz bewusst gemeinsam eine
            Schule betreiben und nicht einfach eine «Dienstleistung» verkaufen.
            Gelebte Solidarität heisst: Die Kinder und der Lernort Schule
            Bauernhof Schmeli stehen im Mittelpunkt. Alle Beteiligten bringen
            das ein, was sie können und wollen, um die Schule zu unterstützen,
            beständig zu machen und voranzutreiben. Alle unterstützen sich
            gegenseitig.
          </Typography>
          <ArrowButton
            arrow="start"
            palette="orangeInverted"
            variant="outlined"
            documentLink
            to="/documents/Unsere Werte und Grundhaltungen.pdf"
            transparent={true}
          >
            Unsere Werte und Grundhaltungen
          </ArrowButton>
        </Grid>
      </Grid>
    </Section>
  );
}
