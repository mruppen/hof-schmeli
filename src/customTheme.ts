import { createMuiTheme, Theme } from "@material-ui/core";
import common from "@material-ui/core/colors/common";
import createPalette from "@material-ui/core/styles/createPalette";
import React from "react";

const fontFamily = ["IBM Plex Sans"].join(",");

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    green: Palette["primary"];
    orange: Palette["primary"];
    blue: Palette["primary"];
    yellow: Palette["primary"];
  }
  interface PaletteOptions {
    green: PaletteOptions["primary"];
    orange: PaletteOptions["primary"];
    blue: PaletteOptions["primary"];
    yellow: PaletteOptions["primary"];
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
        orange: {
          main: "#EF4F2B",
          contrastText: common.white,
        },
        blue: {
          main: "#63899F",
          contrastText: common.white,
        },
        yellow: {
          main: "#EAA922",
          contrastText: common.black,
        },
      },
      typography: {
        fontSize: 14,
        htmlFontSize: 16,
      },
    });

    theme.palette.green = theme.palette.augmentColor(theme.palette.green);
    theme.palette.orange = theme.palette.augmentColor(theme.palette.orange);
    theme.palette.blue = theme.palette.augmentColor(theme.palette.blue);
    theme.palette.yellow = theme.palette.augmentColor(theme.palette.yellow);

    // P paragraph
    theme.typography.body1 = {
      fontSize: theme.typography.pxToRem(20),
      lineHeight: "150%",
      fontFamily: fontFamily,
      fontStyle: "normal",
      fontWeight: 600,
      [theme.breakpoints.down("xs")]: {
        fontSize: "1rem",
      },
    };

    // P-small paragraph
    theme.typography.body2 = {
      fontSize: theme.typography.pxToRem(16),
      lineHeight: "160%",
      fontFamily: fontFamily,
      [theme.breakpoints.down("xs")]: {
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
      [theme.breakpoints.down("xs")]: {
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
      [theme.breakpoints.down("xs")]: {
        fontSize: theme.typography.pxToRem(32),
        lineHeight: "130%",
      },
    };

    // H2
    theme.typography.h2 = {
      fontSize: theme.typography.pxToRem(44),
      lineHeight: "110%",
      fontFamily: fontFamily,
      [theme.breakpoints.down("xs")]: {
        fontSize: theme.typography.pxToRem(28),
        lineHeight: "130%",
      },
    };

    // H3
    theme.typography.h3 = {
      fontSize: theme.typography.pxToRem(32),
      lineHeight: "130%",
      fontFamily: fontFamily,
      [theme.breakpoints.down("xs")]: {
        fontSize: theme.typography.pxToRem(24),
        lineHeight: "130%",
      },
    };

    // H4
    theme.typography.h4 = {
      fontSize: theme.typography.pxToRem(24),
      lineHeight: "130%",
      fontFamily: fontFamily,
      [theme.breakpoints.down("xs")]: {
        fontSize: theme.typography.pxToRem(20),
        lineHeight: "140%",
      },
    };

    // H5
    theme.typography.h5 = {
      fontSize: theme.typography.pxToRem(18),
      lineHeight: "140%",
      fontFamily: fontFamily,
      [theme.breakpoints.down("xs")]: {
        fontSize: theme.typography.pxToRem(16),
        lineHeight: "150%",
      },
    };

    // H6
    theme.typography.h6 = {
      fontSize: theme.typography.pxToRem(16),
      lineHeight: "150%",
      fontFamily: fontFamily,
      [theme.breakpoints.down("xs")]: {
        fontSize: theme.typography.pxToRem(14),
        lineHeight: "160%",
      },
    };

    // Label
    theme.typography.subtitle1 = {
      fontFamily: fontFamily,
      fontSize: theme.typography.pxToRem(14),
      lineHeight: "160%",
    };

    return theme;
  }, []);
}
