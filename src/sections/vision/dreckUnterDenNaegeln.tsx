import {
  createStyles,
  Grid,
  Hidden,
  makeStyles,
  Typography,
  Theme,
} from "@material-ui/core";
import Section from "components/section";
import SectionTitle from "components/titles/sectionTitle";
import dreck from "data/images/dreck.png";
import preact from "preact";

const useStyles = makeStyles((theme: Theme) => ({
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
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      height: undefined,
      marginBottom: 0,
      backgroundSize: "contain",
    }

  },
  image: {
    borderRadius: 8,
  },
}));

export default function DreckUnterDenNaegeln(): preact.VNode {
  const classes = useStyles();
  return (
    <Section palette="blue" paddingTop={80} paddingBottom={112}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
          <div className={classes.imageContainer}>
            <img src={dreck} className={classes.image} />
          </div>
        </Grid>
        <Hidden smDown>
          <Grid item md={1} />
        </Hidden>
        <Grid item sm={12} md={5}>
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
    </Section>
  );
}
