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
import ArrowButton from "../arrowButton";

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
    <Container className={containerClasses.main} disableGutters>
      <Grid container spacing={2} justify="center">
        <Grid item xs={12}>
          <Typography variant="h2" className={classes.center}>
            {children}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ArrowButton variant="outlined" arrow="start" palette="orange">
            {toText}
          </ArrowButton>
        </Grid>
      </Grid>
    </Container>
  );
}
