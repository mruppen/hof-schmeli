import {
  Container,
  createStyles,
  Grid,
  Hidden,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import MainNavigation from "components/mainNavigation";
import Section from "components/section";
import HeaderTitle from "components/titles/headerTitle";
import gemeinschaft from "data/images/header/gemeinschaft.png";
import preact from "preact";
import { PaletteOrColorsType } from "utils/index";

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
    <Section additionalClassName={classes.container} palette="orangeInverted">
      <Container disableGutters maxWidth={false} className={classes.inner}>
        <Grid container spacing={2}>
          <Grid xs={12} item>
            <MainNavigation colors={navigationColors} route="gemeinschaft" />
          </Grid>
          <Grid xs={12} item>
            <HeaderTitle />
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
