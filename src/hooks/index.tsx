import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/styles";
import { ColorsType as colorsFromUtils } from "../utils";

export type Colors = colorsFromUtils;

export type ColorsFunc = (theme: Theme) => Colors;

const useContainerStyles: (props: ColorsFunc) => ClassNameMap<"main"> =
  makeStyles<Theme, ColorsFunc>((theme: Theme) =>
    createStyles({
      main: (props) => ({
        backgroundColor: props(theme).backgroundColor,
        color: props(theme).color,
        [theme.breakpoints.up("xs")]: {
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
    })
  );

export { useContainerStyles };
