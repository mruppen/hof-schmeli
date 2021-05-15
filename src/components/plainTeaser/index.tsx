import {
  createStyles,
  Grid,
  Hidden,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import preact, { ComponentChildren } from "preact";
import ArrowButton from "../arrowButton";
import Section from "../section";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    center: {
      textAlign: "center",
    },
  });
});

type PlainTeaserProps = {
  to: string;
  toText: string;
  documentLink?: boolean;
  children: ComponentChildren;
};

export default function PlainTeaser({
  to,
  toText,
  documentLink = false,
  children,
}: PlainTeaserProps): preact.VNode {
  const classes = useStyles();
  return (
    <Section paddingBottom={80} paddingTop={80} palette="orange">
      <Grid container spacing={2} justify="center">
        <Grid item xs={false} sm={1}>
          <Hidden />
        </Grid>
        <Grid item xs={12} sm={10}>
          <Typography variant="h2" className={classes.center}>
            {children}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={10}>
          <div className={classes.center}>
            <ArrowButton
              variant="outlined"
              arrow="start"
              palette="orangeInverted"
              to={to}
              documentLink={documentLink}
            >
              {toText}
            </ArrowButton>
          </div>
        </Grid>
        <Grid item xs={false} sm={1}>
          <Hidden />
        </Grid>
      </Grid>
    </Section>
  );
}
