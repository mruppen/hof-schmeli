import { Container, Grid, Theme, useTheme } from "@material-ui/core";
import preact from "preact";
import { ColorStyles, useContainerStyles } from "../../hooks";
import { TeaserModel } from "../../models/models";
import Teaser from "../teaser";

export type TeaserRowProps = {
  teasers: TeaserModel[];
};

export default function TeaserRow({ teasers }: TeaserRowProps): preact.VNode {
  const classes = useContainerStyles(
    (theme: Theme): ColorStyles => ({
      color: theme.palette.green.main,
      backgroundColor: theme.palette.green.contrastText,
    })
  );

  const theme = useTheme();

  const children: React.ReactNode[] = [];
  teasers.forEach((teaser, index) =>
    children.push(
      <Grid item xs={12} sm={4}>
        <Teaser
          keys={teaser.keys}
          palette={{
            backgroundColor: theme.palette.green.contrastText,
            color: theme.palette.green.main,
          }}
          text={teaser.text}
          title={teaser.title}
          to={teaser.to}
          toText="Mehr Informationen"
          image={teaser.image}
          imageCaption={teaser.imageCaption}
          key={index}
        />
      </Grid>
    )
  );

  return (
    <Container disableGutters className={classes.main}>
      <Grid container spacing={2}>
        {children}
      </Grid>
    </Container>
  );
}
