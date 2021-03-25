import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/styles";
import { ColorStyles as fromUtils } from "../utils";

export type ColorStyles = fromUtils;

export type ColorStylesFunc = (theme: Theme) => ColorStyles;

const useContainerStyles: (
  props: ColorStylesFunc
) => ClassNameMap<"main"> = makeStyles<Theme, ColorStylesFunc>(
  (theme: Theme) => {
    return createStyles({
      main: (props) => ({
        backgroundColor: props(theme).backgroundColor,
        color: props(theme).color,
        [theme.breakpoints.up("sm")]: {
          width: 1440,
          maxWidth: 1440,
          paddingLeft: 188,
          paddingRight: 188,
        },
        [theme.breakpoints.down("xs")]: {
          paddingLeft: 24,
          paddingRight: 24,
          width: 375,
          maxWidth: 375,
        },
      }),
    });
  }
);

export { useContainerStyles };
