import {
  createStyles,
  makeStyles,
  Theme,
  useMediaQuery,
  useTheme,
  Menu,
  IconButton,
  MenuItem,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import preact from "preact";
import { useState } from "preact/hooks";
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
      [theme.breakpoints.down("xs")]: {
        backgroundColor: "transparent",
        justifyContent: "flex-end"
      }
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
    menu: (props) =>({
      color: props.color,
    })
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

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: JSX.TargetedMouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!isXs) {
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
  } else {
    return (
      <div className={classes.navigation}><IconButton color="inherit" onClick={handleClick}><MenuIcon /></IconButton>
        <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} className={classes.menu}
        >
          <MenuItem onClick={handleClose} className={classes.menu}>Für Eltern</MenuItem>
          <MenuItem onClick={handleClose}>Schule</MenuItem>
          <MenuItem onClick={handleClose}>Vision</MenuItem>
          <MenuItem onClick={handleClose}>Geschichten</MenuItem>
          <MenuItem onClick={handleClose}>Ich möchte helfen</MenuItem>
        </Menu>
      </div>
    );
  }
}
