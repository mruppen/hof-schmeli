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
import HeaderTitle from "../../components/titles/headerTitle";
import home from "../../data/images/header/home.png";
import { PaletteOrColorsType } from "../../utils";

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
    subtitle: {
      paddingTop: 48,
    },
  })
);

export default function HeaderHome(): preact.VNode {
  const theme = useTheme();
  const classes = useStyles();

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
            <HeaderTitle />
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
