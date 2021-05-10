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
import gemeinschaft from "../../../data/images/header/gemeinschaft.png";
import { PaletteOrColorsType } from "../../../utils";
import MainNavigation from "../../mainNavigation";
import Section from "../../section";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      backgroundImage: `url(${gemeinschaft})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
      backgroundPosition: "left bottom",
      backgroundColor: "#F2F2F2",
      width: 1440,
      height: 982,
      border: "none",
    },
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
  })
);

export default function HeaderGemeinschaft(): preact.VNode {
  const theme = useTheme();
  const classes = useStyles();

  const navigationColors: PaletteOrColorsType = {
    color: "transparent",
    backgroundColor: theme.palette.orange.main,
  };

  return (
    <Section additionalClassName={classes.container} palette="orange">
      <Container disableGutters maxWidth={false} className={classes.inner}>
        <Grid container spacing={2}>
          <Grid xs={12} item>
            <MainNavigation colors={navigationColors} />
          </Grid>
          <Grid xs={12} item>
            <Typography variant="h1" className={classes.title}>
              Schule
              <br />
              Bauernhof
              <br />
              Schmeli
            </Typography>
          </Grid>
        </Grid>
        <Grid item container xs={12}>
          <Grid xs={false} sm={2} item>
            <Hidden />
          </Grid>
          <Grid xs={12} sm={8} item>
            <Typography variant="h2" className={classes.subtitle}>
              Ich möchte helfen
            </Typography>
            <Typography variant="h4" className={classes.lead}>
              «Um ein Kind grosszuziehen, braucht es ein ganzes Dorf». Nur
              gemeinsam können wir unsere Ziele erreichen. Wir sind auf Ihre
              Unterstützung angewiesen.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}
