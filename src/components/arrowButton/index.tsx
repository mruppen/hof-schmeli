import {
  Button,
  ButtonProps,
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core";
import { PaletteColor } from "@material-ui/core/styles/createPalette";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import clsx from "clsx";
import preact from "preact";

type CustomColors = {
  color: string;
  backgroundColor: string;
};

type PaletteType = "green" | "blue" | "orange" | "yellow" | CustomColors;

type StyleProps = { backgroundColor: string; color: string };

type ArrowButtonProps = {
  arrow: "start" | "end";
  palette: PaletteType;
} & Required<Pick<ButtonProps, "variant" | "children" | "className">>;

const useStyles = makeStyles<Theme, StyleProps, "button">((theme: Theme) => {
  return createStyles({
    button: (props) => ({
      color: props.color,
      backgroundColor: props.backgroundColor,
      borderColor: props.color,
      "&:hover": {
        color: props.backgroundColor,
        backgroundColor: props.color,
      },
    }),
  });
});

export default function ArrowButton({
  children,
  arrow,
  palette,
  className,
  ...props
}: ArrowButtonProps): preact.VNode {
  const theme = useTheme();
  const classes = useStyles(getPaletteColor(theme, palette));
  console.log(props);
  return (
    <Button
      className={clsx(classes.button, className)}
      startIcon={arrow === "start" ? <ArrowForwardIcon /> : null}
      endIcon={arrow === "end" ? <ArrowForwardIcon /> : null}
      {...props}
    >
      {children}
    </Button>
  );
}

function getPaletteColor(theme: Theme, palette: PaletteType): StyleProps {
  const paletteColor = getPaletteColorFromTheme(theme, palette);
  if (!!paletteColor) {
    return {
      backgroundColor: paletteColor.main,
      color: paletteColor.contrastText,
    };
  } else {
    return {
      backgroundColor: (palette as CustomColors).backgroundColor,
      color: (palette as CustomColors).color,
    };
  }
}

function getPaletteColorFromTheme(
  theme: Theme,
  palette: PaletteType
): PaletteColor | null {
  if (typeof palette === "string" && palette in theme.palette) {
    return theme.palette[palette];
  }
  return null;
}
