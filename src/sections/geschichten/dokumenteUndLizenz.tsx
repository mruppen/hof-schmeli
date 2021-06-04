import {
  Grid,
  Hidden,
  Link,
  makeStyles,
  Typography,
  useTheme,
  Theme,
} from "@material-ui/core";
import ArrowLink from "components/arrowLink";
import Section from "components/section";
import SectionTitle from "components/titles/sectionTitle";
import schnecke from "data/images/schneckeGelb.png";
import preact from "preact";
import { ColorsType } from "utils/index";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundImage: `url(${schnecke})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "85% 15%",
    [theme.breakpoints.down("sm")]: {
      backgroundSize: "80%",
      backgroundPosition: "center center"
    }
  },
  space: {
    marginTop: 20,
  },
  link: {
    color: "white",
    fontStyle: "underline",
  },
}));

export default function DokumenteUndLizenz(): preact.VNode {
  const classes = useStyles();
  const theme = useTheme();
  const colors: ColorsType = {
    color: "transparent",
    backgroundColor: theme.palette.orange.contrastText,
  };
  return (
    <Section
      paddingBottom={80}
      paddingTop={80}
      palette="orange"
      additionalClassName={classes.container}
    >
      <Grid container spacing={2}>
        <Grid item sm={12} md={5}>
          <SectionTitle title="Weitere Dokumente" />
          <ArrowLink
            palette={colors}
            documentLink
            to="/documents/Anmeldung Schule Bauernhof Schmeli.pdf"
            variant="body1"
          >
            Anmeldung
          </ArrowLink>
          <ArrowLink
            palette={colors}
            className={classes.space}
            documentLink
            to="/documents/Schulgeld Schule Bauernhof Schmeli.pdf"
            variant="body1"
          >
            Schulgeld
          </ArrowLink>
          <ArrowLink
            palette={colors}
            className={classes.space}
            documentLink
            to="/documents/Stundenplan Schule Bauernhof Schmeli.pdf"
            variant="body1"
          >
            Stundenplan
          </ArrowLink>
          <ArrowLink
            palette={colors}
            className={classes.space}
            documentLink
            to="/documents/Statuten Unterstützungsverein.pdf"
            variant="body1"
          >
            Statuten Unterstützungsverein
          </ArrowLink>
          <ArrowLink
            palette={colors}
            className={classes.space}
            documentLink
            to="/documents/Materialspenden für unsere Schulwelten.pdf"
            variant="body1"
          >
            Materialspenden
          </ArrowLink>
        </Grid>
        <Hidden smDown>
          <Grid item md={7} />
        </Hidden>
        <Grid item xs={12} sm={12}>
          <SectionTitle
            title="Lizenz für Dokumente"
            className={classes.space}
          />
          <Typography variant="body2">
            Wir möchten das Wissen und die Erfahrungen, die in der Schule
            Bauernhof Schmeli stecken, gerne weitergeben - in der Hoffnung, dass
            es noch viele ähnliche Initiativen und Bewegungen gibt. Die unten
            verlinkten Dokumente dürfen also weiterverwendet werden. Wir stellen
            sie unter eine Lizenz, die dies erlaubt: Creative Commons
            Attribution-ShareAlike 4.0 International License <br /> (mehr dazu
            hier:
            <Link
              className={classes.link}
              href="https://creativecommons.org/licenses/by-sa/4.0/deed.de"
              target="_blank"
            >
              https://creativecommons.org/licenses/by-sa/4.0/deed.de
            </Link>
            ).
            <br />
            <br />
            Du darfst die Unterlagen also verwenden, kopieren und
            weiterentwickeln. Dabei musst du aber zwingend{" "}
            <b>die Autoren nennen</b>, die die Unterlagen erstellt haben
            (Attribution),{" "}
            <b>den link www.schule-bauernhof-schmeli.ch angeben</b> und so
            Wertschätzung und Dank ausdrücken. Und wenn du Unterlagen
            weiterentwickelst, dann musst du diese wieder unter den gleichen
            Bedingungen anderen zur Verfügung stellen (ShareAlike).
            <br />
            <br />
            Wir freuen uns, wenn du uns deine Weiterentwicklungen zukommen
            lässt, damit auch wir wieder davon lernen können.
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
}
