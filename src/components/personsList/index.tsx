import { Grid, makeStyles, useTheme } from "@material-ui/core";
import preact from "preact";
import peopleSample from "../../data/images/peopleSample.png";
import { useContainerStyles } from "../../hooks";
import { TeaserModel } from "../../models/models";
import { ColorsType } from "../../utils";
import Section from "../section";

const useStyles = makeStyles({
  container: {
    paddingTop: 112,
    paddingBottom: 80,
  },
});

const teasers: TeaserModel[] = [
  {
    image: peopleSample,
    title: "Simone Maurer",
    text: "Kindergärtnerin, Primarlehrerin, Kinderyoga-Lehrerin, Landwirtin im Nebenerwerb mit Schafen, Eseln und Pferden. Genossenschafts-Präsidentin",
    to: "mailto:simone.maurer@sbs.ch",
    toText: "simone.maurer@sbs.ch",
  },
  {
    image: peopleSample,
    title: "Simone Maurer",
    text: "Kindergärtnerin, Primarlehrerin, Kinderyoga-Lehrerin, Landwirtin im Nebenerwerb mit Schafen, Eseln und Pferden. Genossenschafts-Präsidentin",
    to: "mailto:simone.maurer@sbs.ch",
    toText: "simone.maurer@sbs.ch",
  },
  {
    image: peopleSample,
    title: "Simone Maurer",
    text: "Kindergärtnerin, Primarlehrerin, Kinderyoga-Lehrerin, Landwirtin im Nebenerwerb mit Schafen, Eseln und Pferden. Genossenschafts-Präsidentin",
    to: "mailto:simone.maurer@sbs.ch",
    toText: "simone.maurer@sbs.ch",
  },
];

export default function PersonsList(): preact.VNode {
  const theme = useTheme();
  const colors: ColorsType = {
    color: theme.palette.yellow.contrastText,
    backgroundColor: theme.palette.yellow.main,
  };
  const containerClasses = useContainerStyles((_) => colors);
  const classes = useStyles();

  return (
    <Section palette="yellow" additionalClassName={classes.container}>
      <Grid container spacing={2}>
        createTeaserRowGridItems(teasers, "yellow");
      </Grid>
    </Section>
  );
}
