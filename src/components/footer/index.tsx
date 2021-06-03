import {
  Container,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import ArrowLink from "components/arrowLink";
import ContactFooter from "components/contactFooter";
import MainNavigation from "components/mainNavigation";
import preact from "preact";
import { PaletteOrColorsType } from "utils/index";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: theme.palette.green.main,
      color: theme.palette.green.contrastText,
      width: 1440,
      maxWidth: 1440,
      paddingTop: 80,
      paddingRight: 79,
      paddingBottom: 80,
      paddingLeft: 82,
      [theme.breakpoints.down(1500)]: {
        width: 1024,
        maxWidth: 1024,
      },
      [theme.breakpoints.down("md")]: {
        width: 900,
        maxWidth: 900,
      },
      [theme.breakpoints.down("sm")]: {
        width: 540,
        maxWidth: 540,
        paddingTop: 56,
        paddingRight: 24,
        paddingBottom: 56,
        paddingLeft: 24,
      },
      [theme.breakpoints.down("xs")]: {
        width: 375,
        maxWidth: 375,
      },
    },
    content: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },
    title: {
      fontSize: theme.typography.pxToRem(72),
      fontWeight: 700,
      fontStyle: "normal",
      lineHeight: "93%",
      letterSpacing: "-1%",
      // width: "100%",
      [theme.breakpoints.down(1500)]: {
        fontSize: theme.typography.pxToRem(64),
      },
      [theme.breakpoints.down("md")]: {
        fontSize: theme.typography.pxToRem(56),
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.pxToRem(48),
      },
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
      [theme.breakpoints.down("sm")]: {
        marginLeft: 0,
      },
    },
    rightInner: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      marginTop: 32,
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
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
  const navigationColors: PaletteOrColorsType = {
    color: "white",
    backgroundColor: "transparent",
  };

  return (
    <Container maxWidth={false} disableGutters className={classes.container}>
      <div className={classes.content}>
        {/* <div className={classes.left}> */}
        <Typography variant="h1" className={classes.title}>
          Schule
          <br />
          Bauernhof
          <br />
          Schmeli
        </Typography>
        {/* </div> */}
        <div className={classes.right}>
          <MainNavigation palette={navigationColors} footer={true} />
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
                palette="greenInverted"
                variant="body2"
                className={classes.margin21}
                to="/gemeinschaft"
              >
                Sponsor werden
              </ArrowLink>
            </div>
            <ContactFooter colors="green" />
          </div>
        </div>
      </div>
    </Container>
  );
}
