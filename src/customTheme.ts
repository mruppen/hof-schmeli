import { createMuiTheme, Theme } from "@material-ui/core";
import common from "@material-ui/core/colors/common";
import createPalette from "@material-ui/core/styles/createPalette";
import React from "react";

const fontFamily = ["IBM Plex Sans"].join(",");
const fontFamilyMono = ["IBM Plex Mono"].join(",");

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    green: Palette["primary"];
    greenInverted: Palette["primary"];
    orange: Palette["primary"];
    orangeInverted: Palette["primary"];
    blue: Palette["primary"];
    blueInverted: Palette["primary"];
    yellow: Palette["primary"];
    yellowInverted: Palette["primary"];
  }
  interface PaletteOptions {
    green: PaletteOptions["primary"];
    greenInverted: PaletteOptions["primary"];
    orange: PaletteOptions["primary"];
    orangeInverted: PaletteOptions["primary"];
    blue: PaletteOptions["primary"];
    blueInverted: PaletteOptions["primary"];
    yellow: PaletteOptions["primary"];
    yellowInverted: PaletteOptions["primary"];
  }
}

export default function useCustomTheme(): Theme {
  return React.useMemo(() => {
    const theme = createMuiTheme({
      palette: {
        green: {
          main: "#369340",
          contrastText: common.white,
        },
        greenInverted: {
          main: common.white,
          contrastText: "#369340",
        },
        orange: {
          main: "#EF4F2B",
          contrastText: common.white,
        },
        orangeInverted: {
          main: common.white,
          contrastText: "#EF4F2B",
        },
        blue: {
          main: "#63899F",
          contrastText: common.white,
        },
        blueInverted: {
          main: common.white,
          contrastText: "#63899F",
        },
        yellow: {
          main: "#EAA922",
          contrastText: common.black,
        },
        yellowInverted: {
          main: common.black,
          contrastText: "#EAA922",
        },
        background: {
          default: "#FFFFFF",
        },
      },
      typography: {
        fontSize: 14,
        htmlFontSize: 16,
      },
    });

    theme.palette.green = theme.palette.augmentColor(theme.palette.green);
    theme.palette.greenInverted = theme.palette.augmentColor(
      theme.palette.greenInverted
    );
    theme.palette.orange = theme.palette.augmentColor(theme.palette.orange);
    theme.palette.orangeInverted = theme.palette.augmentColor(
      theme.palette.orangeInverted
    );
    theme.palette.blue = theme.palette.augmentColor(theme.palette.blue);
    theme.palette.blueInverted = theme.palette.augmentColor(
      theme.palette.blueInverted
    );
    theme.palette.yellow = theme.palette.augmentColor(theme.palette.yellow);
    theme.palette.yellowInverted = theme.palette.augmentColor(
      theme.palette.yellowInverted
    );

    // P paragraph
    theme.typography.body1 = {
      fontSize: theme.typography.pxToRem(20),
      lineHeight: "150%",
      fontFamily: fontFamily,
      fontStyle: "normal",
      fontWeight: 600,
      [theme.breakpoints.down(1500)]: {
        fontSize: theme.typography.pxToRem(19),
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "1rem",
      },
    };

    // P-small paragraph
    theme.typography.body2 = {
      fontSize: theme.typography.pxToRem(16),
      lineHeight: "160%",
      fontFamily: fontFamily,
      [theme.breakpoints.down("md")]: {
        fontSize: theme.typography.pxToRem(14),
      },
    };

    // Button
    theme.typography.button = {
      fontSize: theme.typography.pxToRem(14),
      lineHeight: "100%",
      fontFamily: fontFamily,
    };

    // Caption
    theme.typography.caption = {
      fontSize: theme.typography.pxToRem(14),
      lineHeight: "150%",
      fontFamily: fontFamily,
      [theme.breakpoints.down("md")]: {
        fontSize: theme.typography.pxToRem(13),
        lineHeight: "160%",
      },
    };

    // H1
    theme.typography.h1 = {
      fontSize: theme.typography.pxToRem(100),
      lineHeight: "93%",
      fontWeight: 700,
      fontFamily: fontFamily,
      [theme.breakpoints.down(1500)]: {
        fontSize: theme.typography.pxToRem(72),
      },
      [theme.breakpoints.down("md")]: {
        fontSize: theme.typography.pxToRem(62),
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.pxToRem(34),
        lineHeight: "130%",
      },
    };

    // H2
    theme.typography.h2 = {
      fontSize: theme.typography.pxToRem(44),
      lineHeight: "110%",
      fontFamily: fontFamily,
      [theme.breakpoints.down(1500)]: {
        fontSize: theme.typography.pxToRem(32),
      },
      [theme.breakpoints.down("lg")]: {
        fontsize: theme.typography.pxToRem(28),
      },
      [theme.breakpoints.down("md")]: {
        fontSize: theme.typography.pxToRem(24),
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.pxToRem(22),
        lineHeight: "140%",
      },
    };

    // H3
    theme.typography.h3 = {
      fontSize: theme.typography.pxToRem(32),
      lineHeight: "130%",
      fontFamily: fontFamily,
      [theme.breakpoints.down("md")]: {
        fontSize: theme.typography.pxToRem(24),
        lineHeight: "130%",
      },
    };

    // H4
    theme.typography.h4 = {
      fontSize: theme.typography.pxToRem(24),
      lineHeight: "130%",
      fontFamily: fontFamily,
      [theme.breakpoints.down(1500)]: {
        fontSize: 20,
      },
      [theme.breakpoints.down("lg")]: {
        fontsize: 18,
      },
      [theme.breakpoints.down("md")]: {
        fontSize: 17,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.pxToRem(20),
        lineHeight: "140%",
      },
    };

    // H5
    theme.typography.h5 = {
      fontSize: theme.typography.pxToRem(18),
      lineHeight: "140%",
      fontFamily: fontFamily,
      [theme.breakpoints.down("md")]: {
        fontSize: theme.typography.pxToRem(16),
        lineHeight: "150%",
      },
    };

    // H6
    theme.typography.h6 = {
      fontSize: theme.typography.pxToRem(16),
      lineHeight: "150%",
      fontFamily: fontFamily,
      [theme.breakpoints.down("md")]: {
        fontSize: theme.typography.pxToRem(14),
        lineHeight: "160%",
      },
    };

    // Label
    theme.typography.subtitle1 = {
      fontFamily: fontFamilyMono,
      fontSize: theme.typography.pxToRem(14),
      lineHeight: "160%",
    };

    console.log(theme.typography);
    return theme;
  }, []);
}
