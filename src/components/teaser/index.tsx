import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import preact from "preact";
import { ColorStylesFunc } from "../../hooks";
import { TeaserModel } from "../../models/models";
import { getColorStyles, PaletteType } from "../../utils";
import ArrowButton from "../arrowButton";

type UseStylesType = (
  func: ColorStylesFunc
) => ClassNameMap<"container" | "image" | "caption" | "text">;

const useStyles: UseStylesType = makeStyles<Theme, ColorStylesFunc>(
  (theme: Theme) =>
    createStyles({
      container: (props) => ({
        backgroundColor: props(theme).backgroundColor,
        color: props(theme).color,
        paddingTop: 0,
      }),
      image: {
        width: "100%",
        height: "auto",
      },
      subtitle1: {
        marginTop: theme.spacing(1),
      },
      text: {
        marginTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
      },
    })
);

type TeaserProps = TeaserModel & {
  palette: PaletteType;
};

export default function Teaser({
  image,
  imageCaption,
  title,
  text,
  to,
  toText,
  palette,
}: TeaserProps): preact.VNode {
  const classes = useStyles((theme: Theme) => getColorStyles(theme, palette));
  return (
    <Grid container spacing={0} className={classes.container}>
      {image && (
        <Grid item xs={12}>
          <img src={image} className={classes.image} />
        </Grid>
      )}
      {imageCaption && (
        <Grid item xs={12}>
          <Typography variant="subtitle1" className={classes.subtitle1}>
            {imageCaption}
          </Typography>
        </Grid>
      )}
      {title && (
        <Grid item xs={12}>
          <Typography variant="h4">{title}</Typography>
        </Grid>
      )}
      {text && (
        <Grid item xs={12}>
          <Typography variant="body2" className={classes.text}>
            {text}
          </Typography>
        </Grid>
      )}
      {to && (
        <Grid item xs={12}>
          <ArrowButton arrow="start" palette={palette} variant="text">
            {toText}
          </ArrowButton>
        </Grid>
      )}
    </Grid>
  );
}