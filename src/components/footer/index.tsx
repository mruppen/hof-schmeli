import {
  Container,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  useTheme,
} from "@material-ui/core";
import preact from "preact";
import { invert, PaletteOrColorsType } from "../../utils";
import ArrowLink from "../arrowLink";
import ContactFooter from "../contactFooter";
import MainNavigation from "../mainNavigation";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: theme.palette.green.main,
      color: theme.palette.green.contrastText,
      [theme.breakpoints.up("sm")]: {
        width: 1440,
        maxWidth: 1440,
        paddingTop: 80,
        paddingRight: 79,
        paddingBottom: 80,
        paddingLeft: 82,
      },
      [theme.breakpoints.down("xs")]: {
        width: 375,
        maxWidth: 375,
        addingTop: 56,
        paddingRight: 24,
        paddingBottom: 56,
        paddingLeft: 24,
      },
    },
    content: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      width: "100%",
    },
    title: {
      fontSize: theme.typography.pxToRem(72),
      fontWeight: 700,
      fontStyle: "normal",
      lineHeight: "93%",
      letterSpacing: "-1%",
      width: 415,
    },
    left: {
      width: 415,
    },
    right: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      marginLeft: 16,
    },
    rightInner: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      marginTop: 32,
    },
    rightInnerLeft: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      width: 307,
    },
    margin21: {
      marginBottom: 20,
    },
  })
);

export default function Footer(): preact.VNode {
  const classes = useStyles();
  const theme = useTheme();

  const navigationColors: PaletteOrColorsType = {
    color: theme.palette.green.main,
    backgroundColor: theme.palette.green.contrastText,
  };
  return (
    <Container maxWidth={false} disableGutters className={classes.container}>
      <div className={classes.content}>
        <div className={classes.left}>
          <Typography variant="h1" className={classes.title}>
            Schule Bauernhof Schmeli
          </Typography>
        </div>
        <div className={classes.right}>
          <MainNavigation colors={navigationColors} />
          <div className={classes.rightInner}>
            <div className={classes.rightInnerLeft}>
              <Typography variant="h4" className={classes.margin21}>
                Teil davon werden
              </Typography>
              <Typography variant="body2" className={classes.margin21}>
                Unterstütze unser Projekt und helfe uns, die Schule zu einem Ort
                der Chancengleichheit zu machen.
              </Typography>
              {/* <ArrowLink
                palette={navigationColors}
                variant="body2"
                className={classes.margin21}
                to="mailto:schmeli@gmail.com"
              >
                Newsletter anmelden
              </ArrowLink> */}
              <ArrowLink
                palette={navigationColors}
                variant="body2"
                className={classes.margin21}
                to="/gemeinschaft"
              >
                Sponsor werden
              </ArrowLink>
            </div>
            <ContactFooter colors={invert(navigationColors)} />
          </div>
        </div>
      </div>
    </Container>
  );
}
