import { makeStyles, Typography } from "@material-ui/core";
import preact from "preact";

const useStyles = makeStyles({
  title: {
    paddingTop: 42,
  },
});

export default function HeaderTitle(): preact.VNode {
  const classes = useStyles();
  return (
    <Typography variant="h1" className={classes.title}>
      Schule
      <br />
      Bauernhof
      <br />
      Schmeli
    </Typography>
  );
}
