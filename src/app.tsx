import { CssBaseline, ThemeProvider, Typography } from "@material-ui/core";
import preact from "preact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactSubscribe from "./components/contactSubscribe";
import MainTeaser from "./components/mainTeaser";
import PlainTeaser from "./components/plainTeaser";
import TeaserRow from "./components/teaserRow";
import TopicTeaser from "./components/topicTeaser";
import useCustomTheme from "./customTheme";
import milchHolen from "./data/images/milchHolen.png";
import teaser from "./data/images/teaser.png";
import { allTeasers } from "./data/teasers";
import Home from "./routes/home";
import Schule from "./routes/schule";
import Vision from "./routes/vision";

export function App(): preact.VNode {
  const theme = useCustomTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/schule">
            <Schule />
          </Route>
          <Route path="/vision">
            <Vision />
          </Route>
          <Route path="/mainTeaser">
            <MainTeaser
              image={teaser}
              text="Selbstbestimmtes und selbstorganisiertes Lernen heisst Lernen, das vorwiegend aus eigenem Antrieb, gemäss eigenen Interessen und individuellem Tempo und mit selbstgewählter Lerntechnik und Sozialform geschieht."
              title="Die Bauernhof-Schule"
              to="."
              toText="Mehr Infos für Eltern"
            />
          </Route>
          <Route path="/topicTeaser">
            <TopicTeaser
              image={milchHolen}
              title="So lernt dein Kind"
              to="/"
              toText="Infos für Eltern"
              teasers={[]}
            >
              <Typography variant="body1">
                in einem sicheren und geborgenen Umfeld
                <br />
                angenommen in seiner ureigenen Persönlichkeit
                <br />
                selbstbestimmt, selbstorganisiert, aus eigenem Antrieb mit
                liebevoller, wertschätzender und professioneller Unterstützung
                <br />
                verbunden mit der Natur, den Tieren und der Gemeinschaft
                <br />
              </Typography>
            </TopicTeaser>
          </Route>
          <Route path="/teaserRow">
            <TeaserRow teasers={allTeasers} />
          </Route>
          <Route path="/plainTeaser">
            <PlainTeaser to="/teaserRow" toText="Unsere Vision">
              Wir leben Schule -<br />
              Mit Menschlichkeit
            </PlainTeaser>
          </Route>
          <Route path="/contactSubscribe">
            <ContactSubscribe />
          </Route>
          <Route path="/">
            {/* <QuoteTeaser
              image={roger}
              title="“Bäume brauchen Wurzeln. Ein kleiner Baum kann umso besser wachsen und gedeihen, je kräftiger seine Wurzeln sind, mit denen er sich im Erdreich verankert und seine Nährstoffe aufnimmt.”"
              person="person"
            /> */}
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
