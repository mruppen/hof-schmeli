import { Grid, makeStyles, Theme } from "@material-ui/core";
import clsx from "clsx";
import ArrowButton from "components/arrowButton";
import { createTeaserRowGridItems } from "components/teaserRow";
import ContentTitleH4 from "components/titles/contentTitleH4";
import SectionTitle from "components/titles/sectionTitle";
import { TeaserModel } from "models/models";
import preact, { ComponentChildren, Fragment } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import { useWindowSize } from "src/hooks";

const useStyles = makeStyles((theme: Theme) => ({
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
    borderRadius: 8,
  },
  button: {
    marginTop: 24,
    // [theme.breakpoints.down("md")]: {
    //   marginTop: 16,
    // },
  },
}));

type TopicTeaserProps = {
  documentLink?: boolean;
  imageClass: string;
  imageRatio?: number;
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
  imageRatio = 1.5,
  title,
  subtitle,
  teasers,
  to,
  toText,
  children,
}: TopicTeaserProps): preact.VNode {
  const classes = useStyles();
  const windowSize = useWindowSize();
  const imageRef = useRef<HTMLDivElement>();
  const contentRef = useRef<HTMLDivElement>();
  const [css, setCss] = useState<JSX.CSSProperties>({});

  useEffect(() => {
    if (imageRef.current && contentRef.current) {
      const imageHeight = imageRef.current.offsetWidth / imageRatio;
      const css: JSX.CSSProperties = {
        minHeight: imageHeight,
      };
      setCss(css);
    }
  }, [windowSize]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <SectionTitle title={title} isInsideGrid />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={7}>
        <div
          className={clsx(classes.image, imageClass)}
          ref={imageRef}
          style={css}
        />
      </Grid>
      <Grid item sm={12} md={6} lg={5}>
        <div className={classes.content} ref={contentRef}>
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
