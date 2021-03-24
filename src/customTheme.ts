import { useMediaQuery, createMuiTheme, Theme } from "@material-ui/core";
import React from "react";

export default function useCustomTheme(): Theme {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  return React.useMemo(() => {
    const theme = createMuiTheme({
      palette: {
        green: {
          main: "#369340",
        },
        orange: {
          main: "#EF4F2B",
        },
        blue: {
          main: "#63899F",
        },
        yellow: {
          main: "#EAA922",
        },
      },
      typography: {
        fontSize: 16,
      },
    });

    // P paragraph
    theme.typography.body1 = {
      fontSize: "1.25rem",
      lineHeight: "160%",
      [theme.breakpoints.down("xs")]: {
        fontSize: "1rem",
      },
    };

    // P-small paragraph
    theme.typography.body2 = {
      fontSize: "1rem",
      lineHeight: "160%",
      [theme.breakpoints.down("xs")]: {
        fontSize: "0.875rem",
      },
    };

    // Button
    theme.typography.button = {
      fontSize: "0.875rem",
      lineHeight: "100%",
    };

    // Caption
    theme.typography.caption = {
      fontSize: "0.875rem",
      lineHeight: "150%",
      [theme.breakpoints.down("xs")]: {
        fontSize: "0.8125rem",
        lineHeight: "160%",
      },
    }

    // H1
    theme.typography.h1 = {
      fontSize: "4rem",
      lineHeight: "110%",
      [theme.breakpoints.down("xs")]: {
        fontSize: "2rem",
        lineHeight: "130%",
      },
    };

    // H2
    theme.typography.h2 = {
      fontSize: "3rem",
      lineHeight: "120%",
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.75rem",
        lineHeight: "130%",
      },
    };

    // H3
    theme.typography.h3 = {
      fontSize: "2rem",
      lineHeight: "130%",
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.5rem",
        lineHeight: "130%",
      },
    };

    // H4
    theme.typography.h4 = {
      fontSize: "1.5rem",
      lineHeight: "130%",
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.25rem",
        lineHeight: "140%",
      },
    };

    // H5
    theme.typography.h5 = {
      fontSize: "1.125rem",
      lineHeight: "140%",
      [theme.breakpoints.down("xs")]: {
        fontSize: "1rem",
        lineHeight: "150%",
      },
    };

    // H6
    theme.typography.h6 = {
      fontSize: "1rem",
      lineHeight: "150%",
      [theme.breakpoints.down("xs")]: {
        fontSize: "0.875rem",
        lineHeight: "160%",
      },
    };

    theme.typography.

    

    return theme;
  }, [prefersDarkMode]);
}
