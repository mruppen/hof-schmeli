import {
  Container,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import preact, { ComponentChildren } from "preact";
import { useContainerStyles } from "../../hooks";
import { TeaserModel } from "../../models/models";
import ArrowButton from "../arrowButton";
import TeaserRow from "../teaserRow";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      padding: 24,
      backgroundColor: theme.palette.green.main,
      color: theme.palette.green.contrastText,
      borderRadius: 10,
      height: "100%",
    },
    image: {
      width: "100%",
      borderRadius: 10,
    },
  })
);

type TopicTeaserProps = {
  image: string;
  title: string;
  subtitle?: string;
  teasers?: TeaserModel[];
  to: string;
  toText: string;
  children: ComponentChildren;
};

export default function TopicTeaser({
  image,
  title,
  subtitle,
  teasers,
  to,
  toText,
  children,
}: TopicTeaserProps): preact.VNode {
  const classes = useStyles();
  const containerClasses = useContainerStyles((theme) => {
    return {
      color: theme.palette.green.main,
      backgroundColor: theme.palette.green.contrastText,
    };
  });
  return (
    <Container className={containerClasses.main}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2">{title}</Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
          <img src={image} className={classes.image} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <div className={classes.content}>
            {subtitle &&
              <Typography variant="h4">{subtitle}</Typography>
            }
            {children}
            <ArrowButton
              arrow="start"
              palette="green"
              variant="outlined"
              to={to}
            >
              {toText}
            </ArrowButton>
          </div>
        </Grid>
      </Grid>
      {teasers && 
        <TeaserRow teasers={teasers} />
      }
    </Container>
  );
}
