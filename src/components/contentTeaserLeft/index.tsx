import { createStyles, Grid, Hidden, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import preact, { ComponentChildren } from "preact";
import { PaletteOrColorsType } from "../../utils";
import Section from "../section";
import SectionTitle from "../titles/sectionTitle";

const useStyles = makeStyles(() =>
  createStyles({
    image: {
      borderRadius: 8,
      width: "100%",
    },
  })
);

type ContentTeaserLeftProps = {
  palette: PaletteOrColorsType;
  title: string;
  image: string;
  containerClassName?: string;
  imageClassName?: string;
  children: ComponentChildren;
};

export default function ContentTeaserLeft({
  palette,
  title,
  image,
  containerClassName,
  imageClassName,
  children,
}: ContentTeaserLeftProps): preact.VNode {
  const classes = useStyles();

  return (
    <Section
      paddingBottom={112}
      paddingTop={80}
      palette={palette}
      additionalClassName={containerClassName}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <SectionTitle title={title} />
          {children}
        </Grid>
        <Grid item xs={false} sm={1}>
          <Hidden />
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={image} className={clsx(classes.image, imageClassName)} />
        </Grid>
      </Grid>
    </Section>
  );
}
