import {
  Button,
  ButtonProps,
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import clsx from "clsx";
import preact from "preact";
import { Link } from "react-router-dom";
import { ColorsType, getColors, PaletteOrColorsType } from "../../utils";

type ArrowButtonProps = {
  arrow: "start" | "end";
  palette: PaletteOrColorsType;
  to?: string;
} & Pick<ButtonProps, "className"> &
  Required<Pick<ButtonProps, "variant" | "children">>;

const useStyles = makeStyles<Theme, ColorsType>((theme: Theme) => {
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
  to,
  className,
  ...props
}: ArrowButtonProps): preact.VNode {
  const theme = useTheme();
  const classes = useStyles(getColors(theme, palette));
  return (
    <Button
      className={clsx(classes.button, className)}
      startIcon={arrow === "start" ? <ArrowForwardIcon /> : null}
      endIcon={arrow === "end" ? <ArrowForwardIcon /> : null}
      component={Link}
      to={to ?? "/"}
      {...props}
    >
      {children}
    </Button>
  );
}
