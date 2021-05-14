import {
  Button,
  ButtonProps,
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import clsx from "clsx";
import preact from "preact";
import { Link } from "react-router-dom";
import {
  ColorsType,
  getColors,
  invert,
  PaletteOrColorsType,
} from "../../utils";

type ArrowButtonProps = {
  arrow: "start" | "end";
  palette: PaletteOrColorsType;
  transparent?: Boolean;
  to?: string;
  documentLink?: boolean;
} & Pick<ButtonProps, "className"> &
  Required<Pick<ButtonProps, "variant" | "children">>;

type ButtonColorsType = ColorsType & {
  hoverColor: string;
};

const useStyles = makeStyles<Theme, ButtonColorsType>((theme: Theme) => {
  return createStyles({
    button: (props) => ({
      color: props.color,
      backgroundColor: props.backgroundColor,
      borderColor: props.color,
      "&:hover": {
        color: props.hoverColor,
        backgroundColor: props.color,
      },
    }),
  });
});

export default function ArrowButton({
  children,
  arrow,
  palette,
  to,
  documentLink = false,
  className,
  transparent,
  ...props
}: ArrowButtonProps): preact.VNode {
  const theme = useTheme();
  const colors = invert(getColors(theme, palette));
  const buttonColors: ButtonColorsType = {
    color: colors.color,
    backgroundColor: colors.backgroundColor,
    hoverColor: colors.backgroundColor,
  };
  if (!!transparent) {
    buttonColors.backgroundColor = "transparent";
  }

  const classes = useStyles(buttonColors);
  const buttonClass = clsx(classes.button, className);
  const startIcon = arrow == "start" ? <ArrowForward /> : undefined;
  const endIcon = arrow == "end" ? <ArrowForward /> : undefined;

  if (!documentLink) {
    return (
      <Button
        className={buttonClass}
        startIcon={startIcon}
        endIcon={endIcon}
        component={Link}
        to={to ?? "/"}
        {...props}
      >
        {children}
      </Button>
    );
  } else {
    return (
      <Button
        className={buttonClass}
        startIcon={startIcon}
        endIcon={endIcon}
        href={to ?? "/"}
        target="_blank"
        {...props}
      >
        {children}
      </Button>
    );
  }
}
