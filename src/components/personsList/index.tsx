import { Container, makeStyles, useTheme } from "@material-ui/core";
import clsx from "clsx";
import preact from "preact";
import peopleSample from "../../data/images/peopleSample.png";
import { useContainerStyles } from "../../hooks";
import { TeaserModel } from "../../models/models";
import { ColorsType } from "../../utils";
import TeaserRow from "../teaserRow";

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
    text:
      "Kindergärtnerin, Primarlehrerin, Kinderyoga-Lehrerin, Landwirtin im Nebenerwerb mit Schafen, Eseln und Pferden. Genossenschafts-Präsidentin",
    to: "mailto:simone.maurer@sbs.ch",
    toText: "simone.maurer@sbs.ch",
  },
  {
    image: peopleSample,
    title: "Simone Maurer",
    text:
      "Kindergärtnerin, Primarlehrerin, Kinderyoga-Lehrerin, Landwirtin im Nebenerwerb mit Schafen, Eseln und Pferden. Genossenschafts-Präsidentin",
    to: "mailto:simone.maurer@sbs.ch",
    toText: "simone.maurer@sbs.ch",
  },
  {
    image: peopleSample,
    title: "Simone Maurer",
    text:
      "Kindergärtnerin, Primarlehrerin, Kinderyoga-Lehrerin, Landwirtin im Nebenerwerb mit Schafen, Eseln und Pferden. Genossenschafts-Präsidentin",
    to: "mailto:simone.maurer@sbs.ch",
    toText: "simone.maurer@sbs.ch",
  },
];

export default function TeachersList(): preact.VNode {
  const theme = useTheme();
  const colors: ColorsType = {
    color: theme.palette.yellow.contrastText,
    backgroundColor: theme.palette.yellow.main,
  };
  const containerClasses = useContainerStyles((_) => colors);
  const classes = useStyles();

  return (
    <Container
      disableGutters
      maxWidth={false}
      className={clsx(containerClasses.main, classes.container)}
    >
      <TeaserRow teasers={teasers} palette="yellow" />
    </Container>
  );
}
