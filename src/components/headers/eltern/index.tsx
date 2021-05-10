import {
  Container,
  createStyles,
  Grid,
  Hidden,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import clsx from "clsx";
import preact from "preact";
import eltern from "../../../data/images/header/eltern.png";
import { useContainerStyles } from "../../../hooks";
import { PaletteOrColorsType } from "../../../utils";
import MainNavigation from "../../mainNavigation";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      backgroundImage: `url(${eltern})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
      backgroundPosition: "left bottom",
      backgroundColor: "#F2F2F2",
      width: 1440,
      height: 1028,
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

export default function HeaderEltern(): preact.VNode {
  const theme = useTheme();
  const classes = useStyles();
  const containerClasses = useContainerStyles((theme) => {
    return {
      color: theme.palette.orange.main,
      backgroundColor: theme.palette.orange.contrastText,
    };
  });

  const navigationColors: PaletteOrColorsType = {
    color: "transparent",
    backgroundColor: theme.palette.orange.main,
  };

  return (
    <Container
      disableGutters
      maxWidth={false}
      className={clsx(classes.container, containerClasses.main)}
    >
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
              Die Alternative für dein Kind
            </Typography>
            <Typography variant="h4" className={classes.lead}>
              Man kann Kindern soziale Kompetenz nicht beibringen, man kann
              ihnen keine innere Stärke anerziehen, man kann ihnen Mitgefühl
              nicht vermitteln. Solche Kompetenzen müssen erfahren werden.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}