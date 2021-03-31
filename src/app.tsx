import { ThemeProvider } from "@material-ui/core";
import preact from "preact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactSubscribe from "./components/contactSubscribe";
import MainNavigation from "./components/mainNavigation";
import MainTeaser from "./components/mainTeaser";
import PlainTeaser from "./components/plainTeaser";
import QuoteTeaser from "./components/quoteTeaser";
import TeaserRow from "./components/teaserRow";
import useCustomTheme from "./customTheme";
import roger from "./data/images/roger.png";
import teaser from "./data/images/teaser.png";
import { allTeasers } from "./data/teasers";

export function App(): preact.VNode {
  const theme = useCustomTheme();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MainNavigation colors="orange" />
        <Switch>
          <Route path="/mainTeaser">
            <MainTeaser
              image={teaser}
              text="Selbstbestimmtes und selbstorganisiertes Lernen heisst Lernen, das vorwiegend aus eigenem Antrieb, gemäss eigenen Interessen und individuellem Tempo und mit selbstgewählter Lerntechnik und Sozialform geschieht."
              title="Die Bauernhof-Schule"
              to="."
              toText="Mehr Infos für Eltern"
            />
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
            <QuoteTeaser
              image={roger}
              title="“Bäume brauchen Wurzeln. Ein kleiner Baum kann umso besser wachsen und gedeihen, je kräftiger seine Wurzeln sind, mit denen er sich im Erdreich verankert und seine Nährstoffe aufnimmt.”"
              person="person"
            />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
