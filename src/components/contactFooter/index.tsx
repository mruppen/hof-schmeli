import {
  createStyles,
  makeStyles,
  Theme,
  Typography,
  useTheme,
} from "@material-ui/core";
import ArrowLink from "components/arrowLink";
import {
  ColorsType,
  getColors,
  invert,
  PaletteOrColorsType,
} from "utils/index";

const useStyles = makeStyles<Theme, ColorsType>((theme: Theme) => {
  return createStyles({
    container: (props) => ({
      paddingLeft: 16,
      backgroundColor: props.backgroundColor,
      color: props.color,
      minHeight: "100%",
    }),
    space: {
      marginBottom: 20,
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
    <div className={classes.container}>
      <Typography variant="h4" className={classes.space}>
        Kontakt
      </Typography>
      <Typography variant="body2" className={classes.space}>
        Schule Bauernhof Schmeli
        <br />
        Termerweg 140
        <br />
        3900 Brig
      </Typography>
      <Typography variant="body2" className={classes.space}>
        Telefon
        <br />
        079 847 93 96
      </Typography>
      <ArrowLink
        variant="body2"
        palette={invert(colorsType)}
        to="mailto:info.schmeli@gmail.com"
      >
        Mail schreiben
      </ArrowLink>
    </div>
  );
}
