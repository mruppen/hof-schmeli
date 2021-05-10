import {
  createStyles,
  Link,
  LinkProps,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import clsx from "clsx";
import preact from "preact";
import {
  ColorsType,
  getColors,
  invert,
  PaletteOrColorsType,
} from "../../utils";

type ArrowLinkProps = {
  palette: PaletteOrColorsType;
  transparent?: Boolean;
  to?: string;
} & Pick<LinkProps, "className"> &
  Required<Pick<LinkProps, "variant" | "children">>;

type ButtonColorsType = ColorsType & {
  hoverColor: string;
};

const useStyles = makeStyles<Theme, ButtonColorsType>((theme: Theme) => {
  return createStyles({
    link: (props) => ({
      color: props.color,
      backgroundColor: props.backgroundColor,
      borderColor: props.color,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
    }),
    icon: {
      paddingLeft: 12,
      display: "flex",
      alignItems: "center",
    },
  });
});

export default function ArrowLink({
  children,
  palette,
  to,
  transparent,
  className,
  ...props
}: ArrowLinkProps): preact.VNode {
  const theme = useTheme();
  const colors = invert(getColors(theme, palette));
  const linkColors: ButtonColorsType = {
    color: colors.color,
    backgroundColor: colors.backgroundColor,
    hoverColor: colors.backgroundColor,
  };
  if (!!transparent) {
    linkColors.backgroundColor = "transparent";
  }

  const classes = useStyles(linkColors);
  return (
    <Link className={clsx(classes.link, className)} href={to ?? "/"} {...props}>
      <span>{children}</span>
      <span className={classes.icon}>
        <ArrowForward />
      </span>
    </Link>
  );
}
