import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import clsx from "clsx";
import preact, { ComponentChildren, Fragment } from "preact";
import { TeaserModel } from "../../models/models";
import ArrowButton from "../arrowButton";
import { createTeaserRowGridItems } from "../teaserRow";
import ContentTitleH4 from "../titles/contentTitleH4";
import SectionTitle from "../titles/sectionTitle";

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
  documentLink?: boolean;
  imageClass: string;
  title: string;
  subtitle?: string;
  teasers?: TeaserModel[];
  to: string;
  toText: string;
  children: ComponentChildren;
};

export default function TopicTeaser({
  documentLink = false,
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
        <SectionTitle title={title} isInsideGrid />
      </Grid>
      <Grid item xs={12} sm={7}>
        <div className={clsx(classes.image, imageClass)} />
      </Grid>
      <Grid item xs={12} sm={5}>
        <div className={classes.content}>
          {subtitle && <ContentTitleH4 title={subtitle} />}
          {children}
          <ArrowButton
            arrow="start"
            documentLink={documentLink}
            palette="greenInverted"
            variant="outlined"
            to={to}
            className={classes.button}
          >
            {toText}
          </ArrowButton>
        </div>
      </Grid>
      {teasers && createTeaserRowGridItems(teasers, "greenInverted")}
    </Grid>
  );
}
