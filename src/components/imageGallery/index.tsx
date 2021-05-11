import { Container, makeStyles, Theme, useTheme } from "@material-ui/core";
import clsx from "clsx";
import gaestehaus from "../../data/images/gaestehaus.png";
import landschaft from "../../data/images/landschaft.png";
import milchHolen from "../../data/images/milchHolen.png";
import schweine from "../../data/images/schweine.png";
import tipi from "../../data/images/tipi.png";
import wohnwagen from "../../data/images/wohnwagen.png";
import { useContainerStyles } from "../../hooks";
import { TeaserModel } from "../../models/models";
import { ColorsType } from "../../utils";
import TeaserRow from "../teaserRow";

const teasers: TeaserModel[] = [
  {
    image: gaestehaus,
  },
  {
    image: landschaft,
  },
  {
    image: schweine,
  },
  {
    image: wohnwagen,
  },
  {
    image: milchHolen,
  },
  {
    image: tipi,
  },
];

const useStyles = makeStyles({
  margin16: {
    marginTop: 16,
  },
  padding80: {
    paddingBottom: 80,
  },
});

export default function ImageGallery(): preact.VNode {
  const theme = useTheme();
  const colors: ColorsType = {
    color: theme.palette.blue.main,
    backgroundColor: theme.palette.blue.contrastText,
  };

  const classes = useStyles();
  const containerClasses = useContainerStyles((_: Theme) => colors);
  return (
    <Container
      disableGutters
      className={clsx(containerClasses.main, classes.padding80)}
    >
      <TeaserRow teasers={teasers} palette="blue" />
    </Container>
  );
}
