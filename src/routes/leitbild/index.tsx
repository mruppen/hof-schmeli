import {
  Container,
  Grid,
  Hidden,
  makeStyles,
  Typography,
} from "@material-ui/core";
import preact from "preact";
import Footer from "../../components/footer";
import Section from "../../components/section";
import aeste from "../../data/images/aeste.png";
import fruechte from "../../data/images/fruechte.png";
import leitbild from "../../data/images/leitbild.png";
import stamm from "../../data/images/stamm.png";
import wurzeln from "../../data/images/wurzeln.png";
import HeaderLeitbild from "../../sections/leitbild/headerLeitbild";

const useStyles = makeStyles({
  image: {
    width: "100%",
  },
  distance: {
    paddingTop: 48,
    paddingBottom: 24,
  },
  distanceBottom: {
    paddingBottom: 24,
  },
});

export default function Leitbild(): preact.VNode {
  const classes = useStyles();
  return (
    <Container disableGutters maxWidth={false}>
      <HeaderLeitbild />
      <Section palette="orangeInverted" paddingBottom={80} paddingTop={80}>
        <Grid container spacing={2}>
          <Grid item xs={false} sm={2}>
            <Hidden />
          </Grid>
          <Grid item xs={12} sm={8}>
            <img src={leitbild} className={classes.image} />
            <Typography variant="body1" className={classes.distance}>
              Die Pädagogik unserer Schule lässt sich in Form eines Baumes
              darstellen, bestehend aus den Wurzeln/dem Nährboden, dem Stamm,
              der Äste und der Blätter/Blüten/Früchte.
              <br />
              <br /> Dieses Baum-Modell steht für unsere Bildungs-Vision sowie
              unsere Haltung gegenüber den Schülerinnen und Schülern. Es ist
              unser Wegweiser für unser Handeln im Schulalltag.
            </Typography>
            <Typography variant="h2" className={classes.distance}>
              Wurzeln
            </Typography>
            <Typography variant="body1" className={classes.distanceBottom}>
              Wir wollen den Kindern Folgendes in Sachen Wurzeln / Nährboden
              bieten:
            </Typography>
            <Typography variant="h4" className={classes.distanceBottom}>
              selbstbestimmt / selbstorganisiert / lebensnahe Inhalte / freie
              Altersdurchmischung / Lernprozess gewährleisten / Lernprozesse
              sichtbar machen Wissen sammeln und weitergeben / projektorientiert
              / geführte Sequenzen / Lernlandschaften / Schule unterwegs / die
              Welt zu Gast / Generationen-übergreifend
            </Typography>
            <img src={wurzeln} className={classes.image} />
            <Typography variant="h2" className={classes.distance}>
              Stamm
            </Typography>
            <Typography variant="body1" className={classes.distanceBottom}>
              Wir wollen eine Vielfalt pädagogischer Werte und Grundhaltungen
              für die Kinder anbieten, damit Bildung überhaupt erst geschehen
              kann.
            </Typography>
            <Typography variant="body1" className={classes.distanceBottom}>
              Die pädagogischen Werte und Grundhaltungen stehen für das «WOMIT»
              wir den Kindern die Inhalte anbieten möchten und «WOMIT» wir sie
              auf ihrem Weg begleiten.
            </Typography>
            <Typography variant="h4" className={classes.distanceBottom}>
              selbstbestimmt / selbstorganisiert / lebensnahe Inhalte / freie
              Altersdurchmischung / Lernprozess gewährleisten / Lernprozesse
              sichtbar machen Wissen sammeln und weitergeben / projektorientiert
              / geführte Sequenzen / Lernlandschaften / Schule unterwegs / die
              Welt zu Gast / Generationen-übergreifend
            </Typography>
            <img src={stamm} className={classes.image} />
            <Typography variant="h2" className={classes.distance}>
              Äste
            </Typography>
            <Typography variant="body1" className={classes.distanceBottom}>
              Die pädagogischen Methoden beschreiben das «WIE» wir den Kindern
              ihre Erfahrungswelten eröffnen möchten.
            </Typography>
            <Typography variant="h4" className={classes.distanceBottom}>
              Rituale / freies Spiel / Bewegung / Tiere / Natur / Garten / Raum
              für Stille Theater / Musik Tanz Yoga/Atemtechnik/Entspannung /
              Achtsamkeit / Experimentieren / Gestalten / Geschichten / Bücher /
              Fundiertes Erlernen der Grundkompetenzen (lesen, schreiben,
              rechnen)
            </Typography>
            <img src={aeste} className={classes.image} />
            <Typography variant="h2" className={classes.distance}>
              Blätter/Blüten/Früchte
            </Typography>
            <Typography variant="body1" className={classes.distanceBottom}>
              Unsere Vision ist, dass Kinder, die unsere Schule durchlaufen
              haben, einen Rucksack, prall gefüllt mit all den angeeigneten
              Kompetenzen, schultern können und gut vorbereitet, voller
              Zuversicht und Energie in ihr weiteres Leben schreiten dürfen.
            </Typography>
            <Typography variant="h4" className={classes.distanceBottom}>
              Kreativität / Fantasie / vernetztes Denken / Achtsamkeit
              Wertschätzung / Zusammenhalt Verbundenheit / Selbstvertrauen /
              Lebensfreude / Resilienz / Kooperationsfähigkeit / selbständiges
              Denken / Kritikfähigkeit / Konfliktfähigkeit / Beziehungsfähigkeit
              / Dialogfähigkeit / Offenheit / aktiv Verantwortung übernehmen
              für: eigenes Tun, eigene Bildung, für das Wohlbefinden der
              Gemeinschaft, der Tiere, der Umwelt
            </Typography>
            <img src={fruechte} className={classes.image} />
          </Grid>
        </Grid>
      </Section>
      <Footer />
    </Container>
  );
}
