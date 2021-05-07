import { CssBaseline, ThemeProvider } from "@material-ui/core";
import preact from "preact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import useCustomTheme from "./customTheme";
import Eltern from "./routes/eltern";
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
          <Route path="/eltern">
            <Eltern />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
