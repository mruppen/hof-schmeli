import {
  createStyles,
  makeStyles,
  Theme,
  Typography,
  useTheme,
} from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import preact from "preact";
import { ColorsFunc } from "../../hooks";
import { TeaserModel } from "../../models/models";
import { getColors, invert, PaletteOrColorsType } from "../../utils";
import ArrowLink from "../arrowLink";

type UseStylesType = (
  func: ColorsFunc
) => ClassNameMap<"container" | "image" | "caption" | "text" | "subtitle">;

const useStyles: UseStylesType = makeStyles<Theme, ColorsFunc>((theme: Theme) =>
  createStyles({
    container: (props) => ({
      backgroundColor: props(theme).backgroundColor,
      color: props(theme).color,
      paddingTop: 0,
    }),
    image: {
      width: "100%",
      height: "auto",
      borderRadius: 8,
    },
    subtitle: {
      marginTop: theme.spacing(1),
    },
    text: {
      marginTop: theme.spacing(1),
      paddingBottom: theme.spacing(2),
    },
  })
);

type TeaserProps = TeaserModel & {
  palette: PaletteOrColorsType;
};

export default function Teaser({
  image,
  imageCaption,
  title,
  documentLink = false,
  text,
  to,
  toText,
  palette,
}: TeaserProps): preact.VNode {
  const theme = useTheme();
  const colors = getColors(theme, palette);
  const classes = useStyles((theme: Theme) => colors);
  return (
    <div className={classes.container}>
      {image && (
        // <Grid item xs={12}>
        <img src={image} className={classes.image} />
        // </Grid>
      )}
      {imageCaption && (
        // <Grid item xs={12}>
        <Typography variant="subtitle1" className={classes.subtitle}>
          {imageCaption}
        </Typography>
        // </Grid>
      )}
      {title && (
        // <Grid item xs={12}>
        <Typography variant="h4">{title}</Typography>
        // </Grid>
      )}
      {text && (
        // <Grid item xs={12}>
        <Typography variant="body2" className={classes.text}>
          {text}
        </Typography>
        // </Grid>
      )}
      {to && (
        // <Grid item xs={12}>
        <ArrowLink
          variant="body2"
          palette={invert(colors)}
          to={to}
          documentLink={documentLink}
        >
          {toText || "Link"}
        </ArrowLink>
        // </Grid>
      )}
    </div>
  );
}
