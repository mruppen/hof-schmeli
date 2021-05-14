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
  routerLink?: boolean;
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
  routerLink = true,
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
  if (routerLink) {
    return (
      <Button
        className={clsx(classes.button, className)}
        startIcon={arrow == "start" ? <ArrowForward /> : undefined}
        endIcon={arrow == "end" ? <ArrowForward /> : undefined}
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
        className={clsx(classes.button, className)}
        startIcon={arrow == "start" ? <ArrowForward /> : undefined}
        endIcon={arrow == "end" ? <ArrowForward /> : undefined}
        href={to ?? "/"}
        target="_blank"
        {...props}
      >
        {children}
      </Button>
    );
  }
}
