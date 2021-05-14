import { Grid, Hidden, makeStyles, useTheme } from "@material-ui/core";
import preact from "preact";
import benedikt from "../../data/images/benedikt.png";
import carole from "../../data/images/carole.png";
import daniela from "../../data/images/daniela.png";
import danielaImhof from "../../data/images/danielaImhof.png";
import david from "../../data/images/david.png";
import ephraim from "../../data/images/ephraim.png";
import joerg from "../../data/images/joerg.png";
import marieChristin from "../../data/images/marieChristin.png";
import nicole from "../../data/images/nicole.png";
import piera from "../../data/images/piera.png";
import roger from "../../data/images/roger.png";
import simone from "../../data/images/simone.png";
import { TeaserModel } from "../../models/models";
import { ColorsType } from "../../utils";
import Section from "../section";
import Teaser from "../teaser";
import { createTeaserRowGridItems } from "../teaserRow";
import SectionTitle from "../titles/sectionTitle";

const useStyles = makeStyles({
  title: {
    marginBottom: 24,
  },
  titleTop: {
    marginTop: 64,
  },
});

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
    text: "Eigentümerin, Landwirtin",
  },
  {
    image: joerg,
    title: "Jörg Schwank",
    text: "Landwirt",
  },
];

export default function PersonsList(): preact.VNode {
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
          <SectionTitle title="Das Lehrer-Team" isInsideGrid />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Teaser
            palette={colors}
            image={simone}
            title="Simone Maurer"
            text="Kindergärtnerin, Primarlehrerin, Kinderyoga-Lehrerin, Landwirtin im Nebenerwerb mit Schafen, Eseln und Pferden. Genossenschafts-Präsidentin"
          />
        </Grid>
        <Grid item xs={false} sm={2}>
          <Hidden />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Teaser
            palette={colors}
            image={daniela}
            title="Daniela Schwery"
            text="Kindergärtnerin,  Basisstufen-Lehrerin, Lehrerin Fremdsprachen"
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Teaser
            palette={colors}
            image={carole}
            title="Carole Mutter"
            text="Lehrerin 3H-8H, Genossenschaft-Administratorin"
          />
        </Grid>
        <Grid item xs={false} sm={2}>
          <Hidden />
        </Grid>
        <Grid item xs={12} sm={5}>
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
        <Grid item xs={12} sm={5}>
          <Teaser palette={colors} image={piera} title="Piera Sutter" />
        </Grid>
        <Grid item xs={false} sm={2}>
          <Hidden />
        </Grid>
        <Grid item xs={12} sm={5}>
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
