import { ThemeProvider } from "@material-ui/core";
import QuoteTeaser from "./components/quoteTeaser";
import TeaserRow from "./components/teaserRow";
import useCustomTheme from "./customTheme";
import roger from "./data/images/roger.png";
import { allTeasers } from "./data/teasers";

export function App() {
  const theme = useCustomTheme();

  return (
    <ThemeProvider theme={theme}>
      <QuoteTeaser
        image={roger}
        title="“Bäume brauchen Wurzeln. Ein kleiner Baum
kann umso besser wachsen und gedeihen, je
kräftiger seine Wurzeln sind, mit denen er sich im
Erdreich verankert und seine Nährstoffe
aufnimmt.”"
        person="person"
      />
      <TeaserRow teasers={allTeasers} />
    </ThemeProvider>
  );
}
