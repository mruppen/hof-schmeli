import {
  Container,
  Grid,
  Hidden,
  makeStyles,
  Theme,
  Typography,
  useTheme,
} from "@material-ui/core";
import clsx from "clsx";
import preact from "preact";
import schnecke from "../../data/images/schneckeGelb.png";
import { useContainerStyles } from "../../hooks";
import { ColorsType, invert } from "../../utils";
import ArrowButton from "../arrowButton";
import SectionTitle from "../titles/sectionTitle";

const useStyles = makeStyles({
  container: {
    paddingTop: 112,
    paddingBottom: 112,
    backgroundImage: `url(${schnecke})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  padding24: {
    paddingBottom: 24,
  },
});

export default function ContentTeaserSnailEltern(): preact.VNode {
  const classes = useStyles();
  const containerClasses = useContainerStyles((theme: Theme) => {
    return {
      color: theme.palette.orange.contrastText,
      backgroundColor: theme.palette.orange.main,
    };
  });
  const theme = useTheme();
  const buttonColors: ColorsType = invert({
    color: theme.palette.orange.contrastText,
    backgroundColor: theme.palette.orange.main,
  });

  return (
    <Container
      disableGutters
      maxWidth={false}
      className={clsx(containerClasses.main, classes.container)}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <SectionTitle title="Die Schule als Gemeinschaft" />
          <Typography variant="body1" className={classes.padding24}>
            Die Kinder sollen ein vollwertiger Teil der Schulgemeinschaft sein.
            Sie dürfen zu Entscheidungsfindungen beitragen, Mitverantwortung
            tragen, zuhören, sagen, was gesagt werden muss und Respekt erfahren
            und auch zollen.
          </Typography>
          <ArrowButton
            arrow="start"
            palette={buttonColors}
            variant="outlined"
            documentLink
            to="/documents/Unsere Lernkultur.pdf"
            transparent={true}
          >
            Unsere Lernkultur
          </ArrowButton>
        </Grid>
        <Grid item xs={false} sm={2}>
          <Hidden />
        </Grid>
        <Grid item xs={12} sm={5}>
          <SectionTitle title="Gelebte Solidarität" />
          <Typography variant="body1" className={classes.padding24}>
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
            palette={buttonColors}
            variant="outlined"
            documentLink
            to="/documents/Unsere Werte und Grundhaltungen.pdf"
            transparent={true}
          >
            Unsere Werte und Grundhaltungen
          </ArrowButton>
        </Grid>
      </Grid>
    </Container>
  );
}
