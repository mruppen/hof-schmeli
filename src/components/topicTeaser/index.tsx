import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import preact, { ComponentChildren, Fragment } from "preact";
import { TeaserModel } from "../../models/models";
import ArrowButton from "../arrowButton";
import { createTeaserRowGridItems } from "../teaserRow";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      paddingBottom: 32,
    },
    content: {
      padding: 24,
      backgroundColor: theme.palette.green.main,
      color: theme.palette.green.contrastText,
      borderRadius: 8,
      height: "100%",
    },
    image: {
      width: "100%",
      height: "100%",
      borderRadius: 8,
    },
    button: {
      marginTop: 24,
    },
  })
);

type TopicTeaserProps = {
  imageClass: string;
  title: string;
  subtitle?: string;
  teasers?: TeaserModel[];
  to: string;
  toText: string;
  children: ComponentChildren;
};

export default function TopicTeaser({
  imageClass,
  title,
  subtitle,
  teasers,
  to,
  toText,
  children,
}: TopicTeaserProps): preact.VNode {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2" className={classes.title}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={7}>
        <div className={clsx(classes.image, imageClass)} />
      </Grid>
      <Grid item xs={12} sm={5}>
        <div className={classes.content}>
          {subtitle && <Typography variant="h4">{subtitle}</Typography>}
          {children}
          <ArrowButton
            arrow="start"
            palette="green"
            variant="outlined"
            to={to}
            className={classes.button}
          >
            {toText}
          </ArrowButton>
        </div>
      </Grid>
      {teasers && createTeaserRowGridItems(teasers, "green")}
    </Grid>
  );
}
