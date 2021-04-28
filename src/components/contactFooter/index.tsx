import {
  createStyles,
  makeStyles,
  Theme,
  Typography,
  useTheme,
} from "@material-ui/core";
import {
  ColorsType,
  getColors,
  invert,
  PaletteOrColorsType,
} from "../../utils";
import ArrowLink from "../arrowLink";

const useStyles = makeStyles<Theme, ColorsType>((theme: Theme) => {
  return createStyles({
    flexbox: (props) => ({
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      paddingLeft: 16,
      backgroundColor: props.backgroundColor,
      color: props.color,
      minHeight: "100%",
    }),
    margin21: {
      marginBottom: 21,
    },
  });
});

type ContactProps = {
  colors: PaletteOrColorsType;
};

export default function ContactFooter({ colors }: ContactProps): preact.VNode {
  const theme = useTheme();
  const colorsType = getColors(theme, colors);
  const classes = useStyles(colorsType);
  return (
    <div className={classes.flexbox}>
      <Typography variant="h4" className={classes.margin21}>
        Kontakt
      </Typography>
      <Typography variant="body2" className={classes.margin21}>
        Schule Bauernhof Schmeli
        <br />
        Termerweg 140
        <br />
        3900 Brig
      </Typography>
      <Typography variant="body2" className={classes.margin21}>
        Telefon
        <br />
        079 847 93 96
      </Typography>
      <ArrowLink
        variant="body2"
        palette={invert(colorsType)}
        to="mailto:schmeli@gmail.com"
      >
        Mail schreiben
      </ArrowLink>
    </div>
  );
}
