import { Grid } from "@material-ui/core";
import preact from "preact";
import { TeaserModel } from "../../models/models";
import { PaletteOrColorsType } from "../../utils";
import Teaser from "../teaser";

export type TeaserRowProps = {
  teasers: TeaserModel[];
  palette?: PaletteOrColorsType;
};

export default function TeaserRow({
  teasers,
  palette = "green",
}: TeaserRowProps): preact.VNode {
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
