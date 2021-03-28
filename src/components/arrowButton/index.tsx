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
import { ColorStyles, getColorStyles, PaletteType } from "../../utils";

type ArrowButtonProps = {
  arrow: "start" | "end";
  palette: PaletteType;
  to?: string;
} & Pick<ButtonProps, "className"> &
  Required<Pick<ButtonProps, "variant" | "children">>;

const useStyles = makeStyles<Theme, ColorStyles>((theme: Theme) => {
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
  const classes = useStyles(getColorStyles(theme, palette));
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
