import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import ArrowLink from "components/arrowLink";
import ContentTitleH3 from "components/titles/contentTitleH3";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    container: {
      padding: 24,
      backgroundColor: theme.palette.blue.contrastText,
      color: theme.palette.blue.main,
      minHeight: "100%",
      borderRadius: 12,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: theme.palette.blue.contrastText,
      [theme.breakpoints.down("xs")]: {
        paddingLeft: 16,
        paddingRight: 16,
      },
    },
    space: {
      marginBottom: 20,
    },
  });
});

export default function Kontakt(): preact.VNode {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <ContentTitleH3 title="Kontakt" />
      <Typography variant="body2" className={classes.space}>
        Schule Bauernhof Schmeli
        <br />
        Termerweg 140
        <br />
        3900 Brig
      </Typography>
      <Typography variant="body2" className={classes.space}>
        Telefon
        <br />
        079 847 93 96
      </Typography>
      <ArrowLink
        variant="body2"
        palette="blue"
        to="mailto:info.schmeli@gmail.com"
      >
        Mail schreiben
      </ArrowLink>
    </div>
  );
}
