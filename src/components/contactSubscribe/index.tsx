import {
  Container,
  createStyles,
  Grid,
  Hidden,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { ClassNameMap } from "@material-ui/styles";
import clsx from "clsx";
import preact from "preact";
import { useContainerStyles } from "../../hooks";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    container: {
      paddingTop: 80,
      paddingBottom: 80,
    },
    center: {
      textAlign: "center",
    },
    subscribe: {
      border: "1px solid white",
      borderRadius: 12,
      padding: 24,

      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },

    listItem: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      marginTop: 20,
    },

    bullet: {
      backgroundColor: theme.palette.blue.contrastText,
      color: theme.palette.blue.main,
      width: 30,
      minWidth: 30,
    },

    "bullet > p": {
      textAlign: "center",
    },

    listItemText: {
      backgroundColor: theme.palette.blue.main,
      color: theme.palette.blue.contrastText,
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 12,
      lineHeight: 30,
      fontSize: 20,
    },
  });
});

function createListItem(
  index: number,
  text: string,
  classes: ClassNameMap<"listItem" | "bullet" | "listItemText">
): preact.VNode {
  return (
    <div class={classes.listItem}>
      <div class={classes.bullet}>
        <p>{index}</p>
      </div>
      <p class={classes.listItemText}>{text}</p>
    </div>
  );
}

export default function ContactSubscribe(): preact.VNode {
  const containerClasses = useContainerStyles((theme) => {
    return {
      color: theme.palette.blue.contrastText,
      backgroundColor: theme.palette.blue.main,
    };
  });

  const classes = useStyles();

  return (
    <Container
      disableGutters
      className={clsx(containerClasses.main, classes.container)}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2" className={classes.center}>
            Ich bin interessiert
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">
            Kannst du dir vorstellen, dein Kind zu uns in die Schule zu
            schicken?
            <br /> So sieht unser Anmeldeprozess aus:
          </Typography>
        </Grid>
        <Grid item sm={1} implementation="css" smUp component={Hidden} />
        <Grid item xs={12} sm={6}></Grid>
      </Grid>
    </Container>
  );
}
