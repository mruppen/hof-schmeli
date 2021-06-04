import {
  Grid,
  makeStyles,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Check } from "@material-ui/icons";
import { ClassNameMap } from "@material-ui/styles";
import clsx from "clsx";
import Section from "components/section";
import ContentTitleH4 from "components/titles/contentTitleH4";
import SectionTitle from "components/titles/sectionTitle";
import preact, { ComponentChildren } from "preact";
import { useEffect, useState } from "preact/hooks";
import { useWindowSize } from "src/hooks";

const useStyles = makeStyles((theme: Theme) => ({
  center: {
    textAlign: "center",
  },
  content: {
    height: "100%",
    padding: 24,
    borderRadius: 12,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 16,
      paddingRight: 16,
    },
  },
  payment: {
    border: "1px solid white",
  },
  paymentLine: {
    marginTop: theme.breakpoints.down("sm")
      ? theme.spacing(0.5)
      : theme.spacing(1),
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
    [theme.breakpoints.down("sm")]: {
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
  title: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      marginBottom: -theme.spacing(0.5),
    },
  },
}));

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

function CreateAccountLine(
  label: string,
  text: string,
  className: string,
  isSmOrSmaller: boolean
): preact.VNode {
  return (
    <Grid container spacing={0} className={className}>
      <Grid item xs={12} md={5}>
        <Typography variant="body1">
          {label}
          {!isSmOrSmaller ? ":" : ""}
        </Typography>
      </Grid>
      <Grid item xs={12} md={7}>
        <Typography variant={isSmOrSmaller ? "body2" : "body1"}>
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default function IchHelfeMit(): preact.VNode {
  console.log("Rerender");
  const classes = useStyles();
  const windowSize = useWindowSize();
  const theme = useTheme();
  const result = useMediaQuery(theme.breakpoints.down("sm"));
  const [isSmOrSmaller, setIsSmOrSmaller] = useState<boolean>(result);

  useEffect(() => {
    console.log("logging result:", result);

    setIsSmOrSmaller(result);
  }, [windowSize]);

  return (
    <Section paddingBottom={80} paddingTop={80} palette="blue">
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <SectionTitle
            title="Ich helfe mit"
            className={classes.center}
            isInsideGrid
          />
        </Grid>
        <Grid item sm={12} md={7}>
          <div className={clsx(classes.content, classes.payment)}>
            <Typography variant="h4">Spendenkonto</Typography>
            {CreateAccountLine(
              "Kontoinhaber",
              "Genossenschaft Schule Bauernhof Schmeli",
              classes.paymentLine,
              isSmOrSmaller
            )}
            {CreateAccountLine(
              "Kontonummer",
              "104.372.93.09",
              classes.paymentLine,
              isSmOrSmaller
            )}
            {CreateAccountLine(
              "Kontowährung",
              "CHF",
              classes.paymentLine,
              isSmOrSmaller
            )}
            {CreateAccountLine(
              "IBAN",
              "CH2900765001043729309",
              classes.paymentLine,
              isSmOrSmaller
            )}
            {CreateAccountLine(
              "Postcheck Nr.",
              "19-81-6",
              classes.paymentLine,
              isSmOrSmaller
            )}
            {CreateAccountLine(
              "Clearing",
              "765",
              classes.paymentLine,
              isSmOrSmaller
            )}
          </div>
        </Grid>
        <Grid item sm={12} md={5}>
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
