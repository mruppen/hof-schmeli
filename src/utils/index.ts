import { Theme } from "@material-ui/core";
import { PaletteColor } from "@material-ui/core/styles/createPalette";

export type ColorsType = {
  color: string;
  backgroundColor: string;
};

export type PaletteOrColorsType =
  | "green"
  | "blue"
  | "orange"
  | "yellow"
  | ColorsType;

export function invert(colors: ColorsType): ColorsType {
  return {
    color: colors.backgroundColor,
    backgroundColor: colors.color,
  };
}

export function getColors(
  theme: Theme,
  palette: PaletteOrColorsType
): ColorsType {
  const paletteColor = getPaletteColorFromTheme(theme, palette);
  if (!!paletteColor) {
    return {
      backgroundColor: paletteColor.contrastText,
      color: paletteColor.main,
    };
  } else {
    return {
      backgroundColor: (palette as ColorsType).backgroundColor,
      color: (palette as ColorsType).color,
    };
  }
}

function getPaletteColorFromTheme(
  theme: Theme,
  palette: PaletteOrColorsType
): PaletteColor | null {
  if (typeof palette === "string" && palette in theme.palette) {
    return theme.palette[palette];
  }
  return null;
}
