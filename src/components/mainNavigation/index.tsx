import {
  Button,
  createStyles,
  makeStyles,
  Menu,
  MenuItem,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
  withStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import HomeIcon from "components/icons/home";
import preact from "preact";
import { useRef, useState } from "preact/hooks";
import { Link, useHistory } from "react-router-dom";
import { ColorsType, getColors, PaletteOrColorsType } from "utils/index";

interface StylesProps {
  colors: ColorsType;
  footer: boolean;
}

const useStyles = makeStyles<Theme, StylesProps>((theme) =>
  createStyles({
    navigation: (props) => ({
      marginTop: 56,
      backgroundColor: "transparent",
      color: props.colors.color,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        flexWrap: "wrap",
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: 24,
        justifyContent: props.footer ? "flex-start" : "flex-end",
        flexWrap: "wrap",
      },
    }),
    link: {
      color: "inherit",
      fontSize: theme.typography.h4.fontSize,
    },
    icon: {
      fontSize: theme.typography.h4.fontSize,
    },
    textLink: {
      marginLeft: 24,
      fontWeight: 700,
      fontSize: 24,
      [theme.breakpoints.down("sm")]: {
        marginLeft: 20,
      },
    },
    textLinkActive: {
      textDecoration: "none",
    },
    menuItem: {
      paddingTop: 10,
      paddingBottom: 10,
      justifyContent: "center",
      backgroundColor: "inherit",
      color: "inherit",
    },
    listItem: {
      textAlign: "center",
    },
    popupMenu: {
      width: 375,
    },
  })
);

type MainNavigationProps = {
  palette: PaletteOrColorsType;
  route?: "/" | "eltern" | "schule" | "vision" | "geschichten" | "gemeinschaft";
  footer?: boolean;
};

function isWhiteOrTransparent(color: string): boolean {
  if (!!color) {
    const lowerCaseColor = color.toLowerCase();
    return (
      lowerCaseColor == "white" ||
      lowerCaseColor == "#ffffff" ||
      lowerCaseColor == "#fff" ||
      lowerCaseColor == "transparent"
    );
  }
  return false;
}

export default function MainNavigation({
  palette,
  route = "/",
  footer = false,
}: MainNavigationProps): preact.VNode {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const colors = getColors(theme, palette);
  const classes = useStyles({ colors, footer });

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const ref = useRef<HTMLDivElement>();
  const handleClick = (event: JSX.TargetedMouseEvent<HTMLButtonElement>) => {
    setAnchorEl(ref.current);
  };

  const handleClose = (action?: () => void) => {
    setAnchorEl(null);
    if (!!action) {
      action();
    }
  };

  if (!isXs || footer) {
    return (
      <nav className={classes.navigation}>
        <Link className={classes.link} to="/">
          <HomeIcon className={classes.icon} />
        </Link>
        <Typography variant="h4">
          <Link
            style={{ fontSize: "inherit" }}
            to="/eltern"
            className={clsx(classes.link, classes.textLink, {
              [classes.textLinkActive]: route === "eltern",
            })}
          >
            Für Eltern
          </Link>
        </Typography>
        <Typography variant="h4">
          <Link
            style={{ fontSize: "inherit" }}
            to="/schule"
            className={clsx(classes.link, classes.textLink, {
              [classes.textLinkActive]: route === "schule",
            })}
          >
            Schule
          </Link>
        </Typography>
        <Typography variant="h4">
          <Link
            style={{ fontSize: "inherit" }}
            to="/vision"
            className={clsx(classes.link, classes.textLink, {
              [classes.textLinkActive]: route === "vision",
            })}
          >
            Vision
          </Link>
        </Typography>
        <Typography variant="h4">
          <Link
            style={{ fontSize: "inherit" }}
            to="/geschichten"
            className={clsx(classes.link, classes.textLink, {
              [classes.textLinkActive]: route === "geschichten",
            })}
          >
            Geschichten
          </Link>
        </Typography>
        <Typography variant="h4">
          <Link
            style={{ fontSize: "inherit" }}
            to="/gemeinschaft"
            className={clsx(classes.link, classes.textLink, {
              [classes.textLinkActive]: route === "gemeinschaft",
            })}
          >
            Ich möchte helfen
          </Link>
        </Typography>
      </nav>
    );
  } else {
    const backgroundColor = isWhiteOrTransparent(colors.color)
      ? colors.backgroundColor
      : colors.color;
    const styles = {
      paper: {
        color: "white",
        backgroundColor: backgroundColor,
        width: "100%",
      },
    };
    const history = useHistory();
    const StyledMenu = withStyles(styles)(Menu);
    return (
      <div className={classes.navigation} ref={ref}>
        <Button
          style={{ paddingRight: 0 }}
          color="inherit"
          onClick={handleClick}
        >
          <MenuIcon />
          Menu
        </Button>
        <StyledMenu
          className={classes.popupMenu}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => handleClose()}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          anchorReference="anchorEl"
          transformOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <MenuItem
            onClick={() => handleClose(() => history.push("/eltern"))}
            className={classes.menuItem}
          >
            Für Eltern
          </MenuItem>
          <MenuItem
            onClick={() => handleClose(() => history.push("/schule"))}
            className={classes.menuItem}
          >
            Schule
          </MenuItem>
          <MenuItem
            onClick={() => handleClose(() => history.push("/vision"))}
            className={classes.menuItem}
          >
            Vision
          </MenuItem>
          <MenuItem
            onClick={() => handleClose(() => history.push("/geschichten"))}
            className={classes.menuItem}
          >
            Geschichten
          </MenuItem>
          <MenuItem
            onClick={() => handleClose(() => history.push("/gemeinschaft"))}
            className={classes.menuItem}
          >
            Ich möchte helfen
          </MenuItem>
        </StyledMenu>
      </div>
    );
  }
}
