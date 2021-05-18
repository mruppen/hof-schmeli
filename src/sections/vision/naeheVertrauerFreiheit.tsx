import { Grid, Typography } from "@material-ui/core";
import Section from "components/section";
import SectionTitle from "components/titles/sectionTitle";
import preact from "preact";

export default function NaeheVertrauenFreiheit(): preact.VNode {
  return (
    <Section palette="green" paddingBottom={80} paddingTop={80}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <SectionTitle title="Mit Nähe" />
          <Typography variant="body1">
            Wo Kinder, Erwachsene und Tiere sich begegnen und wertschätzende und
            tragende Beziehungen aufbauen können. Alle gleichwertig sind und
            authentisch sein dürfen. Das Miteinander in der Gemeinschaft
            wertschätzend statt bewertend ist – auf allen Ebenen.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <SectionTitle title="Mit Vertrauen" />
          <Typography variant="body1">
            Wo Herausforderungen mutig und vertrauensvoll angegangen werden
            können. Mit gemeinsamer Stärke ein «Über-sich-hinauswachsen»
            erfahren werden kann. Unstimmigkeiten angesprochen werden und
            Konflikte gewaltfrei gelöst werden.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <SectionTitle title="Mit Freiheit und Verantwortung" />
          <Typography variant="body1">
            Wo ein jeder Raum findet, seine Persönlichkeit weiterzuentwickeln
            und sein Potenzial zu entfalten. Lern- und Lebensfreude entfacht,
            erhalten und gelebt wird. Kinder auf das Leben (weiterführende
            Schulen, Lehren, Ausbildungen, Beruf, Berufung) vorbereitet werden.
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
}
