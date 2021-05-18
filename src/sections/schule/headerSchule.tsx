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
import MainNavigation from "components/mainNavigation";
import HeaderTitle from "components/titles/headerTitle";
import schule from "data/images/header/schule.png";
import { useContainerStyles } from "hooks/index";
import preact from "preact";
import { PaletteOrColorsType } from "utils/index";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      backgroundImage: `url(${schule})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
      width: 1440,
      height: 1075,
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
      paddingTop: 24,
    },
  })
);

export default function HeaderSchule(): preact.VNode {
  const theme = useTheme();
  const classes = useStyles();
  const containerClasses = useContainerStyles((theme) => {
    return {
      color: theme.palette.orange.contrastText,
      backgroundColor: "transparent",
    };
  });

  const navigationColors: PaletteOrColorsType = {
    color: "transparent",
    backgroundColor: theme.palette.orange.contrastText,
  };

  return (
    <Container
      disableGutters
      className={clsx(classes.container, containerClasses.main)}
    >
      <Container disableGutters maxWidth={false} className={classes.inner}>
        <Grid container spacing={2}>
          <Grid xs={12} item>
            <MainNavigation colors={navigationColors} route="schule" />
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
              Wir sind anders
            </Typography>
            <Typography variant="h4" className={classes.lead}>
              In der Schule Bauernhof Schmeli dürfen Kinder Kinder sein. Sie
              werden individuell gefordert und gefördert. Dabei steht die
              persönliche Potenzialentfaltung in einem selbstbestimmten und
              selbstorganisierten Lern-Rhythmus im Vordergrund. Ziel ist es,
              Kindern einen naturverbundenen Schulalltag, gepaart mit Lern- und
              Lebensfreude, zu ermöglichen.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
