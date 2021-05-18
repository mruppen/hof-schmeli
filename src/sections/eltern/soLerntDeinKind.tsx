import { makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import Section from "components/section";
import TopicTeaser from "components/topicTeaser";
import feldstecher from "data/images/feldstecher.png";
import preact from "preact";

const useStyles = makeStyles({
  padding32: {
    paddingBottom: 32,
  },
  image: {
    width: "100%",
    borderRadius: 8,
  },
  feldstecherImage: {
    minHeight: 405,
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${feldstecher})`,
    backgroundSize: "115%",
    backgroundPosition: "-50px center",
  },
  content: {
    width: "100%",
    marginTop: 25,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  item: {
    width: 198.4,
  },
  itemDistance: {
    marginRight: 18,
  },
  itemText: {
    marginTop: 8,
  },
});

export default function SoLerntDeinKind(): preact.VNode {
  const classes = useStyles();
  return (
    <Section palette="greenInverted" paddingTop={80} paddingBottom={80}>
      <TopicTeaser
        title="So lernt dein Kind"
        imageClass={classes.feldstecherImage}
        documentLink={true}
        to="/documents/Unsere Werte und Grundhaltungen.pdf"
        toText="Unsere Werte und Grundhaltungen"
      >
        <Typography variant="body1">
          Selbstbestimmtes und selbstorganisiertes Lernen heisst Lernen, das
          vorwiegend aus eigenem Antrieb, gemäss eigenen Interessen und
          individuellem Tempo und mit selbstgewählter Lerntechnik und Sozialform
          geschieht.
        </Typography>
      </TopicTeaser>
      <div className={classes.content}>
        <div className={clsx(classes.item, classes.itemDistance)}>
          <Typography variant="h4">Vertrauen und Unterstützung</Typography>
          <Typography variant="body2" className={classes.itemText}>
            Wir haben Vertrauen, dass jedes Kind seinen eigenen Weg findet, wenn
            es dies selbstbestimmt und unterstützt tun kann.
          </Typography>
        </div>
        <div className={clsx(classes.item, classes.itemDistance)}>
          <Typography variant="h4">Sicherheit und Geborgenheit</Typography>
          <Typography variant="body2" className={classes.itemText}>
            Kinder müssen sich wohl, sicher und geborgen fühlen, um sich mit
            voller Aufmerksamkeit ihrem Lernen widmen zu können.
          </Typography>
        </div>
        <div className={clsx(classes.item, classes.itemDistance)}>
          <Typography variant="h4">Freie Altersmischung</Typography>
          <Typography variant="body2" className={classes.itemText}>
            Kinder dürfen sich über verschiedene Altersstufen hinweg begegnen
            und Lerngruppen entsprechend ihren Interessen, Neigungen und
            Entwicklungsstand bilden.
          </Typography>
        </div>
        <div className={clsx(classes.item, classes.itemDistance)}>
          <Typography variant="h4">Lernprozess gewährleisten</Typography>
          <Typography variant="body2" className={classes.itemText}>
            Wir übernehmen Verantwortung für die Bildung der Kinder und sind dem
            Lehrplan 21 verpflichtet.
          </Typography>
        </div>
        <div className={classes.item}>
          <Typography variant="h4">Wissen sammeln und weitergeben</Typography>
          <Typography variant="body2" className={classes.itemText}>
            Wir arbeiten projektbezogen. Kinder dürfen sich in ein Thema
            vertiefen und die Gemeinschaft an ihrem frisch erworbenen Wissen
            teilhaben lassen.
          </Typography>
        </div>
      </div>
    </Section>
  );
}
