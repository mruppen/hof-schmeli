import {
  Grid,
  Hidden,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import preact from "preact";
import { useContainerStyles } from "../../hooks";
import { ColorsType } from "../../utils";
import Section from "../section";

const useStyles = makeStyles({
  container: {
    paddingTop: 80,
    paddingBottom: 80,
  },
  margin24: {
    marginBottom: 24,
  },
});

export default function ContentTeaserGemeinschaft(): preact.VNode {
  const theme = useTheme();
  const colors: ColorsType = {
    color: theme.palette.blue.main,
    backgroundColor: theme.palette.blue.contrastText,
  };
  const classes = useStyles();
  const containerClasses = useContainerStyles((_) => colors);
  return (
    <Section
      additionalClassName={classes.container}
      palette="blue"
      paddingBottom={80}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <Typography variant="h2" className={classes.margin24}>
            Chancengleichheit für alle Kinder
          </Typography>
          <Typography variant="body1" className={classes.margin24}>
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
          <Typography variant="h2" className={classes.margin24}>
            Schule für jeden Geldbeutel
          </Typography>
          <Typography variant="body1" className={classes.margin24}>
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
