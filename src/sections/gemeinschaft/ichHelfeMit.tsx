import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { Check } from "@material-ui/icons";
import { ClassNameMap } from "@material-ui/styles";
import clsx from "clsx";
import preact, { ComponentChildren } from "preact";
import Section from "../../components/section";
import ContentTitleH4 from "../../components/titles/contentTitleH4";
import SectionTitle from "../../components/titles/sectionTitle";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    center: {
      textAlign: "center",
    },
    content: {
      height: "100%",
      padding: 24,
      borderRadius: 12,
      [theme.breakpoints.down("xs")]: {
        paddingLeft: 16,
        paddingRight: 16,
      },
    },
    payment: {
      border: "1px solid white",
    },

    containerRight: {
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
    listItem: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      marginBottom: 20,
    },
    listItemText: {
      marginLeft: 12,
    },
  });
});

function createListItem(
  text: ComponentChildren,
  classes: ClassNameMap<"listItem">
): preact.VNode {
  return (
    <div className={classes.listItem}>
      <Check />
      {text}
    </div>
  );
}

export default function IchHelfeMit(): preact.VNode {
  const classes = useStyles();

  return (
    <Section paddingBottom={80} paddingTop={80} palette="blue">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SectionTitle
            title="Ich helfe mit"
            className={classes.center}
            isInsideGrid
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <div className={clsx(classes.content, classes.payment)}>
            <Typography variant="body1">
              Dieser Teil ist noch am Entstehen
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={5}>
          <div className={classes.containerRight}>
            <ContentTitleH4 title="Warum braucht es meine Hilfe" />
            {createListItem(
              <Typography variant="body1" className={classes.listItemText}>
                Chancengleichheit für alle Kinder
              </Typography>,
              classes
            )}
            {createListItem(
              <Typography variant="body1" className={classes.listItemText}>
                Finanzielle Sicherung des Schulbetriebs
              </Typography>,
              classes
            )}
            {createListItem(
              <Typography variant="body1" className={classes.listItemText}>
                Anschaffung des nötigen Schulmaterials
              </Typography>,
              classes
            )}
            {createListItem(
              <Typography variant="body1" className={classes.listItemText}>
                Lebendiger und offener Unterricht
              </Typography>,
              classes
            )}
          </div>
        </Grid>
      </Grid>
    </Section>
  );
}
