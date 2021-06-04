import { createStyles, Grid, Hidden, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import Section from "components/section";
import SectionTitle from "components/titles/sectionTitle";
import preact, { ComponentChildren } from "preact";
import { PaletteOrColorsType } from "utils/index";

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
        <Grid item sm={12} md={5}>
          <SectionTitle title={title} />
          {children}
        </Grid>
        <Hidden smDown>
          <Grid item md={1} />
        </Hidden>
        <Grid item sm={12} md={6}>
          <img src={image} className={clsx(classes.image, imageClassName)} />
        </Grid>
      </Grid>
    </Section>
  );
}
