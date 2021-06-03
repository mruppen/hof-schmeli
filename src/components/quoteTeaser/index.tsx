import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import Section from "components/section";
import preact, { ComponentChildren } from "preact";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    imageContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    },
    image: {
      // width: "100%",
      marginTop: "auto",
      marginBottom: "auto",
      [theme.breakpoints.down("sm")]: {
        maxWidth: 260,
      },
    },
    spacing: {
      marginTop: 20,
    },
  })
);

type QuoteTeaserProps = {
  image: string;
  children: ComponentChildren;
};

export default function QuoteTeaser({
  image,
  children,
}: QuoteTeaserProps): preact.VNode {
  const classes = useStyles();

  return (
    <Section palette="yellow" paddingBottom={80} paddingTop={80}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={3}>
          <div className={classes.imageContainer}>
            <img src={image} className={classes.image} />
          </div>
        </Grid>
        <Grid item sm={12} md={9}>
          {children}
        </Grid>
      </Grid>
    </Section>
  );
}
