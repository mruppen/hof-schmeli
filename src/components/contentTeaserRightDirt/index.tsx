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
import dreck from "../../data/images/dreck.png";
import { useContainerStyles } from "../../hooks";
import { getColors, invert } from "../../utils";
import SectionTitle from "../titles/sectionTitle";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      paddingTop: 80,
      paddingBottom: 112,
    },
    padding24: {
      paddingBottom: 24,
    },
    imageContainer: {
      overflow: "hidden",
      marginBottom: -217,
      borderRadius: 8,
      height: 637,
      backgroundImage: `url(${dreck})`,
      backgroundPositionX: "-200px",
    },
    image: {
      borderRadius: 8,
    },
  })
);

export default function ContentTeaserRightDirt(): preact.VNode {
  const classes = useStyles();
  const theme = useTheme();
  const colors = invert(getColors(theme, "blue"));
  const containerClasses = useContainerStyles((_) => {
    return {
      color: colors.color,
      backgroundColor: colors.backgroundColor,
    };
  });
  return (
    <Container
      disableGutters
      maxWidth={false}
      className={clsx(containerClasses.main, classes.container)}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div className={classes.imageContainer}>
            <img src={dreck} className={classes.image} />
          </div>
        </Grid>
        <Grid item xs={false} sm={1}>
          <Hidden />
        </Grid>
        <Grid item xs={12} sm={5}>
          <SectionTitle title="Mit Dreck unter den Fingernägeln" />
          <Typography variant="body1">
            Mit der engen Verknüpfung zum Bauernhof wollen wir ein Umfeld
            schaffen, in dem die Kinder Verbundenheit mit der Natur, den Tieren
            und der Gemeinschaft erleben und lernen können. Ein Umfeld, in dem
            sie Tag für Tag aktiv Verantwortung für ihr eigenes Tun, für ihr
            Wohlbefinden, für das Wohlbefinden der Tiere, der Umwelt und der
            Gemeinschaft und für ihre Bildung übernehmen können.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
