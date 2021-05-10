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
import preact from "preact";
import { useState } from "preact/hooks";
import { Link } from "react-router-dom";
import { ColorsType, getColors, PaletteOrColorsType } from "../../utils";
import HomeIcon from "../icons/home";

const useStyles = makeStyles<Theme, ColorsType>((theme) =>
  createStyles({
    navigation: (props) => ({
      backgroundColor: props.backgroundColor,
      color: props.color,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      paddingBottom: 80,
      [theme.breakpoints.down("xs")]: {
        backgroundColor: "transparent",
        justifyContent: "flex-end",
      },
    }),
    link: {
      color: "inherit",
    },
    textLink: {
      marginLeft: 24,
      fontWeight: 700,
      fontSize: 24,
    },
    menuItem: (props) => ({
      color: props.backgroundColor,
      backgroundColor: props.color,
      paddingTop: 24,
      "> li": {
        textAlign: "center",
      },
    }),
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
        <Link className={classes.link} to="/home">
          <HomeIcon />
        </Link>
        <Typography variant="h4">
          <Link to="/eltern" className={clsx(classes.link, classes.textLink)}>
            Für Eltern
          </Link>
        </Typography>
        <Typography variant="h4">
          <Link to="/schule" className={clsx(classes.link, classes.textLink)}>
            Schule
          </Link>
        </Typography>
        <Typography variant="h4">
          <Link to="/vision" className={clsx(classes.link, classes.textLink)}>
            Vision
          </Link>
        </Typography>
        <Typography variant="h4">
          <Link
            to="/geschichten"
            className={clsx(classes.link, classes.textLink)}
          >
            Geschichten
          </Link>
        </Typography>
        <Typography variant="h4">
          <Link
            to="/gemeinschaft"
            className={clsx(classes.link, classes.textLink)}
          >
            Ich möchte helfen
          </Link>
        </Typography>
      </nav>
    );
  } else {
    const styles = {
      paper: {
        backgroundColor: theme.palette.orange.main,
        width: "100%",
      },
    };
    const StyledMenu = withStyles(styles)(Menu);
    return (
      <div className={classes.navigation}>
        <Button
          style={{ paddingRight: 0 }}
          color="inherit"
          onClick={handleClick}
        >
          <MenuIcon />
          Menu
        </Button>
        <StyledMenu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
            onClick={handleClose}
            className={classes.menuItem}
            alignItems="center"
          >
            Für Eltern
          </MenuItem>
          <MenuItem onClick={handleClose} className={classes.menuItem}>
            Schule
          </MenuItem>
          <MenuItem onClick={handleClose} className={classes.menuItem}>
            Vision
          </MenuItem>
          <MenuItem onClick={handleClose} className={classes.menuItem}>
            Geschichten
          </MenuItem>
          <MenuItem onClick={handleClose} className={classes.menuItem}>
            Ich möchte helfen
          </MenuItem>
        </StyledMenu>
      </div>
    );
  }
}
