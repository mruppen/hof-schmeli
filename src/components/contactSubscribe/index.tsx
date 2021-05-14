import {
  createStyles,
  Grid,
  Hidden,
  makeStyles,
  Theme,
  Typography,
  useTheme,
} from "@material-ui/core";
import { ClassNameMap } from "@material-ui/styles";
import clsx from "clsx";
import preact, { ComponentChildren } from "preact";
import { useContainerStyles } from "../../hooks";
import { getColors, invert } from "../../utils";
import ArrowLink from "../arrowLink";
import Section from "../section";
import ContentTitleH3 from "../titles/contentTitleH3";
import SectionTitle from "../titles/sectionTitle";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    container: {
      paddingTop: 80,
      paddingBottom: 80,
    },
    center: {
      textAlign: "center",
    },
    flexbox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      padding: 24,
      borderRadius: 12,
    },

    subscribe: {
      border: "1px solid white",
    },
    contact: {
      backgroundColor: theme.palette.blue.contrastText,
      color: theme.palette.blue.main,
      minHeight: "100%",
    },
    listItem: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      marginBottom: 20,
    },
    bullet: {
      backgroundColor: theme.palette.blue.contrastText,
      color: theme.palette.blue.main,
      width: 30,
      minWidth: 30,
      height: 30,
      borderRadius: 40,
      textAlign: "center",
      verticalAlign: "center",
    },
    listItemText: {
      backgroundColor: theme.palette.blue.main,
      color: theme.palette.blue.contrastText,
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 12,
    },
    margin20: {
      marginBottom: 20,
    },
    marginTop: {
      marginTop: 20,
    },
  });
});

function createListItem(
  index: number,
  text: ComponentChildren,
  classes: ClassNameMap<"listItem" | "bullet" | "listItemText">
): preact.VNode {
  return (
    <div className={classes.listItem}>
      <div className={classes.bullet}>
        <Typography variant="body1">{index}</Typography>
      </div>
      {text}
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
  const theme = useTheme();
  const buttonStyle = invert(getColors(theme, "blue"));

  return (
    <Section paddingBottom={80} paddingTop={80} palette={buttonStyle}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SectionTitle
            title="Ich bin interessiert"
            className={classes.center}
            isInsideGrid
          />
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.center} variant="body2">
            Kannst du dir vorstellen, dein Kind zu uns in die Schule zu
            schicken?
            <br /> So sieht unser Anmeldeprozess aus:
          </Typography>
        </Grid>
        <Grid item sm={1}>
          <Hidden />
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={clsx(classes.subscribe, classes.flexbox)}>
            <ContentTitleH3 title="Anmeldeprozess" />
            {createListItem(
              1,
              <Typography variant="body1" className={classes.listItemText}>
                Schreibe uns eine Mail oder rufe uns an, wenn du vorgängig noch
                mehr Fragen hast
              </Typography>,
              classes
            )}
            {createListItem(
              2,
              <Typography variant="body1" className={classes.listItemText}>
                Fülle das Formular «provisorische Anmeldung» bis spätestens Ende
                März 2022 aus.
                <ArrowLink
                  variant="body1"
                  palette="blue"
                  to="/documents/Anmeldung Schule Bauernhof Schmeli.pdf"
                  documentLink
                >
                  Download Anmeldeformular
                </ArrowLink>
              </Typography>,
              classes
            )}
            {createListItem(
              3,
              <Typography variant="body1" className={classes.listItemText}>
                Wir nehmen persönlich Kontakt mit dir auf.
              </Typography>,
              classes
            )}
            <Typography variant="body2">
              Anmerkung: Aus schulorganisatorischen Gründen behalten wir uns
              vor, nicht alle Anmeldungen zu berücksichtigen.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={clsx(classes.flexbox, classes.contact)}>
            <ContentTitleH3 title="Kontakt" />
            <Typography variant="body2" className={classes.margin20}>
              Schule Bauernhof Schmeli
              <br />
              Termerweg 140
              <br />
              3900 Brig
            </Typography>
            <Typography variant="body2" className={classes.margin20}>
              Telefon
              <br />
              079 847 93 96
            </Typography>
            <ArrowLink
              variant="body2"
              palette={buttonStyle}
              to="mailto:info.schmeli@gmail.com"
            >
              Mail schreiben
            </ArrowLink>
          </div>
        </Grid>
      </Grid>
    </Section>
  );
}
