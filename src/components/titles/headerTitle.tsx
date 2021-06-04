import { makeStyles, Theme, Typography } from "@material-ui/core";
import preact from "preact";
import { customLg } from "src/data/constants";

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    marginTop: 116,
    [theme.breakpoints.down(customLg)]: {
      marginTop: 30,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
    },
  },
}));

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
