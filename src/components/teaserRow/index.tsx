import { Grid } from "@material-ui/core";
import Teaser from "components/teaser";
import { TeaserModel } from "models/models";
import { PaletteOrColorsType } from "utils/index";

export function createTeaserRowGridItems(
  teasers: TeaserModel[],
  palette: PaletteOrColorsType = "green"
): React.ReactNode[] {
  const children: React.ReactNode[] = [];
  teasers.forEach((teaser, index) =>
    children.push(
      <Grid item sm={12} md={4}>
        <Teaser
          keys={teaser.keys}
          palette={palette}
          text={teaser.text}
          title={teaser.title}
          to={teaser.to}
          toText={teaser.toText}
          documentLink={teaser.documentLink}
          image={teaser.image}
          imageCaption={teaser.imageCaption}
          key={index}
        />
      </Grid>
    )
  );

  return children;
}

type TeaserRowProps = {
  teasers: TeaserModel[];
  palette?: PaletteOrColorsType;
};

export default function TeaserRow({
  teasers,
  palette,
}: TeaserRowProps): preact.VNode {
  return (
    <Grid container spacing={2}>
      {createTeaserRowGridItems(teasers, palette)}
    </Grid>
  );
}
