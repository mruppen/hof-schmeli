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
import home from "../../../data/images/header/home.png";
import { useContainerStyles } from "../../../hooks";
import { PaletteOrColorsType } from "../../../utils";
import MainNavigation from "../../mainNavigation";
import Section from "../../section";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      backgroundImage: `url(${home})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
      width: 1440,
      height: 880,
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
  })
);

export default function HeaderHome(): preact.VNode {
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
    <Section palette="greenInverted" additionalClassName={classes.container}>
      <Container disableGutters maxWidth={false} className={classes.inner}>
        <Grid container spacing={2}>
          <Grid xs={12} item>
            <MainNavigation colors={navigationColors} route="/" />
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
              Wir leben Schule
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}
