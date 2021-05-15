import {
  Grid,
  Hidden,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import preact from "preact";
import { ColorsType, invert } from "../../utils";
import ArrowButton from "../arrowButton";
import Section from "../section";
import SectionTitle from "../titles/sectionTitle";

const useStyles = makeStyles({
  margin24: {
    marginBottom: 24,
  },
});

export default function ContentTeaserSchule(): preact.VNode {
  const theme = useTheme();
  const colors: ColorsType = {
    color: theme.palette.blue.main,
    backgroundColor: theme.palette.blue.contrastText,
  };
  const classes = useStyles();
  return (
    <Section paddingBottom={80} paddingTop={80} palette="blue">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <SectionTitle title="Die Genossenschaft «Schule Bauernhof Schmeli»" />
          <Typography variant="body1" className={classes.margin24}>
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
          <Typography variant="body1" className={classes.margin24}>
            Unser Unterstützungsverein hat zum Sinn und Zweck, die Schule
            Bauernhof Schmeli finanziell, ideell und tatkräftig zu unterstützen.
            Alle Eltern unserer Schulkinder treten dem Verein verpflichtend bei.
          </Typography>
          <ArrowButton
            arrow="start"
            palette={invert(colors)}
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
