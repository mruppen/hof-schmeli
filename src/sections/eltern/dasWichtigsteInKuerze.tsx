import {
  Grid,
  Hidden,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import CheckIcon from "components/icons/check";
import Section from "components/section";
import SectionTitle from "components/titles/sectionTitle";
import preact from "preact";
import { getColors, invert } from "utils/index";

const useStyles = makeStyles({
  enumeration: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginBottom: 12,
  },
  icon: {
    width: 24,
    height: 24,
    color: "inherit",
    marginRight: 16,
  },
});

export default function DasWichtigsteInKuerze(): preact.VNode {
  const theme = useTheme();
  const colors = invert(getColors(theme, "green"));
  const classes = useStyles();
  const enumerationItems: string[] = [
    "keine Hausaufgaben",
    "keine Noten",
    "Leistung ohne Leistungsdruck",
    "Sicherheit und Geborgenheit für dein Kind",
    "wir übernehmen Verantwortung für die Bildung und sind dem Lehrplan 21 verpflichtet",
    "problemloser Schulweg mit dem ÖV (Brig-Biela = 15Min.)",
    "Tagesschule mit Mmmh…ittagstisch",
    "Schule und Bauernhof bilden ein Ganzes",
    "genossenschaftlich organisiert",
  ];

  return (
    <Section palette="green" paddingBottom={80} paddingTop={80}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SectionTitle title="Das Wichtigste in Kürze" isInsideGrid />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography variant="body1">
            Kinder müssen sich wohl, sicher und geborgen fühlen, um lernen zu
            können. In unserer Schule wollen wir dieses sichere Umfeld
            ermöglichen und die Kinder bestmöglich unterstützen.
            <br /> Wir haben Vertrauen, dass jedes Kind seinen eigenen Lernweg
            findet, seine Potenziale entfaltet und ausschöpft, um an seine Ziele
            zu gelangen, wenn es dies selbstorganisiert und unterstützt tun
            kann.
          </Typography>
        </Grid>
        <Grid item xs={false} sm={2}>
          <Hidden />
        </Grid>
        <Grid item xs={12} sm={5}>
          <div className={classes.enumeration}>
            {enumerationItems.map((item) => (
              <div className={classes.row}>
                <CheckIcon className={classes.icon} />
                <Typography variant="body1">{item}</Typography>
              </div>
            ))}
          </div>
        </Grid>
      </Grid>
    </Section>
  );
}
