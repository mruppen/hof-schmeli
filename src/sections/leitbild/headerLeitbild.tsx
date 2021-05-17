import {
  Container,
  createStyles,
  Grid,
  Hidden,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import preact from "preact";
import MainNavigation from "../../components/mainNavigation";
import Section from "../../components/section";
import { PaletteOrColorsType } from "../../utils";

const useStyles = makeStyles(() =>
  createStyles({
    inner: {
      paddingTop: 56,
      width: "100%",
    },
    title: {
      paddingTop: 42,
    },
    subtitle: {
      paddingTop: 48,
    },
    lead: {
      paddingTop: 18,
    },
    leadFootnote: {
      paddingTop: 60,
    },
  })
);

export default function HeaderLeitbild(): preact.VNode {
  const classes = useStyles();
  const theme = useTheme();

  const navigationColors: PaletteOrColorsType = {
    color: "transparent",
    backgroundColor: theme.palette.orange.main,
  };
  return (
    <Section palette="orangeInverted">
      <Container disableGutters maxWidth={false} className={classes.inner}>
        <Grid container spacing={2}>
          <Grid xs={12} item>
            <MainNavigation colors={navigationColors} />
          </Grid>
          <Grid xs={12} item>
            <Typography variant="h1" className={classes.title}>
              Leitbild
            </Typography>
          </Grid>
          <Grid item xs={false} sm={2}>
            <Hidden />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h4" className={classes.subtitle}>
              «Bäume brauchen Wurzeln. Ein kleiner Baum kann umso besser wachsen
              und gedeihen, je kräftiger seine Wurzeln sind, mit denen er sich
              im Erdreich verankert und seine Nährstoffe aufnimmt. Nur wenn es
              einem kleinen Baum gelingt, tiefreichende und weit verzweigte
              Wurzeln auszubilden, wird er später auch Wind und Wetter, ja sogar
              Stürme aushalten können.»
            </Typography>
            <Typography variant="h5" className={classes.leadFootnote}>
              aus «Wie Kinder heute wachsen» von G. Hüther u. H. Renz-Polster
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}
