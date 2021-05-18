import { Grid, Hidden, makeStyles, Typography } from "@material-ui/core";
import ArrowButton from "components/arrowButton";
import Section from "components/section";
import SectionTitle from "components/titles/sectionTitle";
import preact from "preact";

const useStyles = makeStyles({
  space: {
    marginBottom: 24,
  },
});

export default function GenossenschaftUnterstuetzungsverein(): preact.VNode {
  const classes = useStyles();

  return (
    <Section paddingBottom={80} paddingTop={80} palette="blueInverted">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <SectionTitle title="Die Genossenschaft «Schule Bauernhof Schmeli»" />
          <Typography variant="body1" className={classes.space}>
            Wir sind nicht profitorientiert (keine GmbH oder AG), sondern
            genossenschaftlich. Bei uns gibt es auch keine Chefetage oder andere
            hierarchische Strukturen. Wir agieren und entscheiden
            gemeinschaftlich, direkt vor Ort, in der betreffenden Funktion.
            <br />
            <br />
            Die Mitglieder der Genossenschaft haben zur Gründung dieser Schule
            beigetragen und tragen diese mit.
          </Typography>
        </Grid>
        <Grid item xs={false} sm={2}>
          <Hidden />
        </Grid>
        <Grid item xs={12} sm={5}>
          <SectionTitle title="Der Unterstützungsverein «Schule Bauernhof Schmeli»" />
          <Typography variant="body1" className={classes.space}>
            Unser Unterstützungsverein hat zum Sinn und Zweck, die Schule
            Bauernhof Schmeli finanziell, ideell und tatkräftig zu unterstützen.
            Alle Eltern unserer Schulkinder treten dem Verein verpflichtend bei.
          </Typography>
          <ArrowButton
            arrow="start"
            palette="blue"
            to="/documents/Statuten Unterstützungsverein.pdf"
            variant="outlined"
            documentLink
          >
            Statuten Unterstützungsverein
          </ArrowButton>
        </Grid>
      </Grid>
    </Section>
  );
}
