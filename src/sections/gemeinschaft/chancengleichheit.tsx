import { Grid, Hidden, makeStyles, Typography } from "@material-ui/core";
import preact from "preact";
import Section from "../../components/section";
import SectionTitle from "../../components/titles/sectionTitle";

const useStyles = makeStyles({
  space: {
    marginBottom: 24,
  },
});

export default function Chancengleichheit(): preact.VNode {
  const classes = useStyles();
  return (
    <Section palette="blueInverted" paddingBottom={80} paddingTop={80}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <SectionTitle title="Chancengleichheit für alle Kinder" />
          <Typography variant="body1" className={classes.space}>
            Dies ist eines der wichtigsten Ziele unserer Schule. Mit einer&nbsp;
            <b>Patenschaft</b> kann das Schulgeld für ein Kind während einer
            wählbaren Zeitspanne übernommen werden. So bieten Sie einem Kind die
            Chance, die Schule Bauernhof Schmeli zu besuchen, auch wenn seine
            Eltern sich dies nicht leisten könnten.
          </Typography>
        </Grid>
        <Grid item xs={false} sm={2}>
          <Hidden />
        </Grid>
        <Grid item xs={12} sm={5}>
          <SectionTitle title="Schule für jeden Geldbeutel" />
          <Typography variant="body1" className={classes.space}>
            Die Schule Bauernhof Schmeli soll jeder Familie offenstehen. Gelebte
            Solidarität heisst auch, dass Elternbeiträge einkommensabhängig
            sind, damit jeder seinen ihm möglichen Teil beitragen kann, auch
            wenn das Familienbudget klein ist. Mit Ihrer Unterstützung können
            wir einen Fonds zur Aufstockung der Elternbeiträge gründen, um den
            Schulbetrieb finanziell zu sichern. Unterstützen Sie
            Chancengleichheit für alle Kinder!
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
}
