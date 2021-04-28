import {
  Container,
  createStyles,
  Grid,
  Hidden,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import preact, { ComponentChildren } from "preact";
import { useContainerStyles } from "../../hooks";
import ArrowButton from "../arrowButton";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    container: {
      paddingTop: 80,
      paddingBottom: 80,
    },
    center: {
      textAlign: "center",
    },
  });
});

type PlainTeaserProps = {
  to: string;
  toText: string;
  children: ComponentChildren;
};

export default function PlainTeaser({
  to,
  toText,
  children,
}: PlainTeaserProps): preact.VNode {
  const containerClasses = useContainerStyles((theme) => {
    return {
      color: theme.palette.orange.contrastText,
      backgroundColor: theme.palette.orange.main,
    };
  });

  const classes = useStyles();
  return (
    <Container
      className={clsx(containerClasses.main, classes.container)}
      disableGutters
    >
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
              palette="orange"
              to={to}
            >
              {toText}
            </ArrowButton>
          </div>
        </Grid>
        <Grid item xs={false} sm={1}>
          <Hidden />
        </Grid>
      </Grid>
    </Container>
  );
}
