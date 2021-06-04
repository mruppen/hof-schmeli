import { Grid, Hidden, makeStyles, useTheme, Theme } from "@material-ui/core";
import Section from "components/section";
import Teaser from "components/teaser";
import { createTeaserRowGridItems } from "components/teaserRow";
import SectionTitle from "components/titles/sectionTitle";
import benedikt from "data/images/benedikt.png";
import carole from "data/images/carole.png";
import daniela from "data/images/daniela.png";
import danielaImhof from "data/images/danielaImhof.png";
import david from "data/images/david.png";
import ephraim from "data/images/ephraim.png";
import joerg from "data/images/joerg.png";
import marieChristin from "data/images/marieChristin.png";
import nicole from "data/images/nicole.png";
import piera from "data/images/piera.png";
import roger from "data/images/roger.png";
import simone from "data/images/simone.png";
import { TeaserModel } from "models/models";
import preact from "preact";
import { ColorsType } from "utils/index";

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    marginBottom: 24,
  },
  titleTop: {
    marginTop: 64,
    [theme.breakpoints.down("sm")]: {
      marginTop: 16
    }
  },
}));

const teasers: TeaserModel[] = [
  {
    image: nicole,
    title: "Nicole Fantoni",
    text: "Genossenschafts-Vizepräsidentin",
  },
  {
    image: roger,
    title: "Roger Summermatter",
    text: "Vereins-Präsident",
  },
  {
    image: benedikt,
    title: "Benedikt Maurer",
    text: "Vereins-Kassier",
  },
  {
    image: marieChristin,
    title: "Marie-Christin Abgottspon",
  },
  {
    image: danielaImhof,
    title: "Daniela Imhof",
    text: "Eigentümerin Hof Schmeli, Bio-Bäuerin, Sozialpädagogin",
  },
  {
    image: joerg,
    title: "Jörg Schwank",
    text: "Landwirt",
  },
];

export default function Personen(): preact.VNode {
  const theme = useTheme();
  const colors: ColorsType = {
    color: theme.palette.yellow.contrastText,
    backgroundColor: theme.palette.yellow.main,
  };

  const classes = useStyles();

  return (
    <Section palette={colors} paddingBottom={80}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SectionTitle title="LehrerInnen-Team" isInsideGrid />
        </Grid>
        <Grid item xs={12} md={5}>
          <Teaser
            palette={colors}
            image={simone}
            title="Simone Maurer"
            text="Kindergärtnerin, Primarlehrerin, Kinderyoga-Lehrerin, Landwirtin im Nebenerwerb mit Schafen, Eseln und Pferden. Genossenschafts-Präsidentin"
          />
        </Grid>
        <Hidden smDown>
          <Grid item md={2}/>
        </Hidden>
        <Grid item xs={12} md={5}>
          <Teaser
            palette={colors}
            image={daniela}
            title="Daniela Schwery"
            text="Kindergärtnerin,  Basisstufen-Lehrerin, Lehrerin Fremdsprachen"
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <Teaser
            palette={colors}
            image={carole}
            title="Carole Mutter"
            text="Lehrerin 3H-8H, Leiterin Bewegung und Tanz, Genossenschaft-Administratorin"
          />
        </Grid>
        <Hidden smDown>
          <Grid item md={2}/>
        </Hidden>
        <Grid item xs={12} md={5}>
          <Teaser
            palette={colors}
            image={ephraim}
            title="Ephraim Salzmann"
            text="Musiker, Leiter für entwicklungsorientierte Musik"
          />
        </Grid>
        <Grid item xs={12}>
          <SectionTitle
            title="Das Bauern-Paar"
            isInsideGrid
            className={classes.titleTop}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <Teaser palette={colors} image={piera} title="Piera Sutter" />
        </Grid>
        <Hidden smDown>
          <Grid item md={2}/>
        </Hidden>
        <Grid item xs={12} md={5}>
          <Teaser palette={colors} image={david} title="David Müller" />
        </Grid>
        <Grid item xs={12}>
          <SectionTitle
            title="Weitere Genossenschafts-Mitglieder"
            isInsideGrid
            className={classes.titleTop}
          />
        </Grid>
        {createTeaserRowGridItems(teasers, colors)}
      </Grid>
    </Section>
  );
}
