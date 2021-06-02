import { useTheme } from "@material-ui/core";
import Header from "components/header";
import gemeinschaft from "data/images/header/gemeinschaft.png";
import preact from "preact";
import { ColorsType } from "src/utils";

export default function HeaderGemeinschaft(): preact.VNode {
  const theme = useTheme();
  const colors: ColorsType = {
    color: theme.palette.green.main,
    backgroundColor: "#F1F0E5",
  };

  return (
    <Header
      activeRoute="gemeinschaft"
      height={982}
      image={gemeinschaft}
      lead="«Um ein Kind grosszuziehen, braucht es ein ganzes Dorf». Nur gemeinsam können wir unsere Ziele erreichen. Wir sind auf Ihre Unterstützung angewiesen."
      palette={colors}
      subTitle="Wir sind anders"
    />
  );
}
