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

export default function Unterstuetzungsverein(): preact.VNode {
  const classes = useStyles();
  return (
    <Section paddingBottom={80} paddingTop={80} palette="blueInverted">
      <Grid container spacing={2}>
        <Grid item xs={false} sm={7}>
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
