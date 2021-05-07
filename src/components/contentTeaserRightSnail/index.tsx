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

export default function ContentTeaserRightSnail(): preact.VNode {
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
        <Grid item xs={false} sm={7}>
          <Hidden />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography variant="h2" className={classes.padding24}>
            Und mit Begeisterung, die Kreise zieht
          </Typography>
          <Typography variant="body1" className={classes.padding24}>
            Wir möchten nicht nur für die Kinder und Familien, die unsere Schule
            besuchen, dazu beitragen, eine glückliche, zufriedene und
            selbstbestimmte Schulzeit zu erleben. Wir möchten auch Inspiration,
            Mutmacher, Unterstützer von anderen Projekten werden.
          </Typography>
          <ArrowButton
            arrow="start"
            palette={buttonColors}
            variant="outlined"
            to="/home"
            transparent={true}
          >
            Ich möchte helfen
          </ArrowButton>
        </Grid>
      </Grid>
    </Container>
  );
}
