import {
  createStyles,
  makeStyles,
  Theme,
  Typography,
  useTheme,
} from "@material-ui/core";
import clsx from "clsx";
import {
  ColorsType,
  getColors,
  invert,
  PaletteOrColorsType,
} from "../../utils";
import ArrowButton from "../arrowButton";

const useStyles = makeStyles<Theme, ColorsType>((theme: Theme) => {
  return createStyles({
    flexbox: (props) => ({
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      padding: 24,
      backgroundColor: props.backgroundColor,
      color: props.color,
      minHeight: "100%",
    }),
    border: (props) => ({
      borderRadius: 12,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: props.color,
    }),
    margin20: {
      marginBottom: 20,
    },
  });
});

type ContactProps = {
  colors: PaletteOrColorsType;
};

export default function Contact({ colors }: ContactProps): preact.VNode {
  const theme = useTheme();
  const colorsType = getColors(theme, colors);
  const classes = useStyles(colorsType);
  return (
    <div className={clsx(classes.flexbox, classes.border)}>
      <Typography variant="h3" className={classes.margin20}>
        Kontakt
      </Typography>
      <Typography variant="body2" className={classes.margin20}>
        Schule Bauernhof Schmeli
        <br />
        Termerweg 140
        <br />
        3900 Brig
      </Typography>
      <Typography variant="body2" className={classes.margin20}>
        Telefon
        <br />
        079 847 93 96
      </Typography>
      <ArrowButton
        variant="text"
        arrow="end"
        palette={invert(colorsType)}
        to="mailto:schmeli@gmail.com"
      >
        Mail schreiben
      </ArrowButton>
    </div>
  );
}
