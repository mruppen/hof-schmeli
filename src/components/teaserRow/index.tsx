import { Container, Grid, makeStyles, Theme } from "@material-ui/core";
import preact from "preact";
import { ColorStyles, useContainerStyles } from "../../hooks";
import { TeaserModel } from "../../models/models";
import Teaser from "../teaser";

export type TeaserRowProps = {
  teasers: TeaserModel[];
};

const useStyles = makeStyles({
  container: {
    marginTop: -8,
  },
});

export default function TeaserRow({ teasers }: TeaserRowProps): preact.VNode {
  const classes = useContainerStyles(
    (theme: Theme): ColorStyles => ({
      color: theme.palette.green.main,
      backgroundColor: theme.palette.green.contrastText,
    })
  );

  const localClasses = useStyles();

  const children: React.ReactNode[] = [];
  teasers.forEach((teaser, index) =>
    children.push(
      <Grid item xs={12} sm={4}>
        <Teaser
          keys={teaser.keys}
          palette={{ backgroundColor: "inherit", color: "inherit" }}
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
