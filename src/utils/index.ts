import { Theme } from "@material-ui/core";
import { PaletteColor } from "@material-ui/core/styles/createPalette";

export type ColorStyles = {
  color: string;
  backgroundColor: string;
};

export type PaletteType = "green" | "blue" | "orange" | "yellow" | ColorStyles;

export function getColorStyles(
  theme: Theme,
  palette: PaletteType
): ColorStyles {
  const paletteColor = getPaletteColorFromTheme(theme, palette);
  if (!!paletteColor) {
    return {
      backgroundColor: paletteColor.main,
      color: paletteColor.contrastText,
    };
  } else {
    return {
      backgroundColor: (palette as ColorStyles).backgroundColor,
      color: (palette as ColorStyles).color,
    };
  }
}

function getPaletteColorFromTheme(
  theme: Theme,
  palette: PaletteType
): PaletteColor | null {
  if (typeof palette === "string" && palette in theme.palette) {
    return theme.palette[palette];
  }
  return null;
}
