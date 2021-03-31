import {
  createStyles,
  makeStyles,
  Theme,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import clsx from "clsx";
import preact from "preact";
import { Link } from "react-router-dom";
import { ColorsType, getColors, PaletteOrColorsType } from "../../utils";

const useStyles = makeStyles<Theme, ColorsType>((theme) =>
  createStyles({
    navigation: (props) => ({
      backgroundColor: props.backgroundColor,
      color: props.color,
      display: "flex",
      flexDirection: "row",
      alignContent: "flex-start",
      justifyContent: "baseline",
      alignItems: "center",
    }),
    link: {
      color: "inherit",
      lineHeight: "130%",
    },
    textLink: {
      marginLeft: 24,
      fontWeight: 700,
      fontSize: 24,
    },
  })
);

type MainNavigationProps = {
  colors: PaletteOrColorsType;
};

export default function MainNavigation({
  colors,
}: MainNavigationProps): preact.VNode {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const realColors = getColors(theme, colors);
  const classes = useStyles({
    color: realColors.backgroundColor,
    backgroundColor: realColors.color,
  });

  return (
    <nav className={classes.navigation}>
      <Link className={classes.link} to="/">
        <HomeIcon />
      </Link>
      <Link to="/parents" className={clsx(classes.link, classes.textLink)}>
        Für Eltern
      </Link>
      <Link to="/school" className={clsx(classes.link, classes.textLink)}>
        Schule
      </Link>
      <Link to="/vision" className={clsx(classes.link, classes.textLink)}>
        Vision
      </Link>
      <Link to="/stories" className={clsx(classes.link, classes.textLink)}>
        Geschichten
      </Link>
      <Link to="/help" className={clsx(classes.link, classes.textLink)}>
        Ich möchte helfen
      </Link>
    </nav>
  );
}
