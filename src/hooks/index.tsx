import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/styles";
import { useEffect, useState } from "preact/hooks";
import { ColorsType as colorsFromUtils } from "utils/index";

export type Colors = colorsFromUtils;

export type ColorsFunc = (theme: Theme) => Colors;

const useContainerStyles: (props: ColorsFunc) => ClassNameMap<"main"> =
  makeStyles<Theme, ColorsFunc>((theme: Theme) =>
    createStyles({
      main: (props) => ({
        backgroundColor: props(theme).backgroundColor,
        color: props(theme).color,

        [theme.breakpoints.up("xs")]: {
          paddingLeft: 24,
          paddingRight: 24,
          width: 375,
          maxWidth: 375,
        },
        [theme.breakpoints.up("sm")]: {
          width: 540,
          maxWidth: 540,
          paddingLeft: 96,
          paddingRight: 96,
        },
        [theme.breakpoints.up("md")]: {
          width: 900,
          maxWidth: 900,
          paddingLeft: 116,
          paddingRight: 116,
        },
        [theme.breakpoints.up("lg")]: {
          width: 1024,
          maxWidth: 1024,
          paddingLeft: 124,
          paddingRight: 124,
        },
        [theme.breakpoints.up(1500)]: {
          width: 1440,
          maxWidth: 1440,
          paddingLeft: 188,
          paddingRight: 188,
        },
      }),
    })
  );

export type HeaderStyleProps = {
  image: string;
  height: number;
  backgroundColor: string;
};

function calculateHeight(height: number, width: number): number {
  return (height * width) / 1440;
}

const useHeaderStyles: (
  props: HeaderStyleProps
) => ClassNameMap<"container" | "containerImage" | "image"> = makeStyles<
  Theme,
  HeaderStyleProps
>((theme: Theme) =>
  createStyles({
    container: (props) => ({
      height: props.height,
      backgroundColor: props.backgroundColor,
      [theme.breakpoints.down(1500)]: {
        height: calculateHeight(props.height, 1024),
      },
      [theme.breakpoints.down("md")]: {
        height: calculateHeight(props.height, 900),
      },
      [theme.breakpoints.down("sm")]: {
        height: "auto",
        backgroundImage: "none",
      },
    }),
    containerImage: (props) => ({
      backgroundImage: `url(${props.image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
    }),
    image: {
      [theme.breakpoints.down("sm")]: {
        marginLeft: -96,
        width: 540,
      },
      [theme.breakpoints.down("xs")]: {
        marginLeft: -24,
        width: 375,
      },
    },
  })
);

export type WindowSize = {
  width: number | undefined;
  height: number | undefined;
};

const useWindowSize: () => WindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
};

export { useContainerStyles, useHeaderStyles, useWindowSize };
