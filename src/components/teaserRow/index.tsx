import { Grid, Theme, useTheme } from "@material-ui/core";
import preact from "preact";
import { Colors, useContainerStyles } from "../../hooks";
import { TeaserModel } from "../../models/models";
import Teaser from "../teaser";
import { PaletteOrColorsType, getColors } from "../../utils";

export type TeaserRowProps = {
  teasers: TeaserModel[];
  palette?: PaletteOrColorsType
};

export default function TeaserRow({ teasers, palette = "green" }: TeaserRowProps): preact.VNode {
  const classes = useContainerStyles(
    (theme: Theme): Colors => getColors(theme, palette)
  );

  const theme = useTheme();

  const children: React.ReactNode[] = [];
  teasers.forEach((teaser, index) =>
    children.push(
      <Grid item xs={12} sm={4}>
        <Teaser
          keys={teaser.keys}
          palette={palette}
          text={teaser.text}
          title={teaser.title}
          to={teaser.to}
          toText={teaser.toText}
          image={teaser.image}
          imageCaption={teaser.imageCaption}
          key={index}
        />
      </Grid>
    )
  );

  return (
    <Grid container spacing={2}>
      {children}
    </Grid>
  );
}
