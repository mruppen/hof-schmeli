import { CssBaseline, ThemeProvider } from "@material-ui/core";
import preact from "preact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Eltern from "routes/eltern";
import Gemeinschaft from "routes/gemeinschaft";
import Geschichten from "routes/geschichten";
import Home from "routes/home";
import Leitbild from "routes/leitbild";
import Schule from "routes/schule";
import Vision from "routes/vision";
import useCustomTheme from "src/customTheme";

export function App(): preact.VNode {
  const theme = useCustomTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/schule">
            <Schule />
          </Route>
          <Route path="/vision">
            <Vision />
          </Route>
          <Route path="/eltern">
            <Eltern />
          </Route>
          <Route path="/gemeinschaft">
            <Gemeinschaft />
          </Route>
          <Route path="/geschichten">
            <Geschichten />
          </Route>
          <Route path="/leitbild">
            <Leitbild />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
