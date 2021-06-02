import { useTheme } from "@material-ui/core";
import Header from "components/header";
import eltern from "data/images/header/eltern.png";
import preact from "preact";
import { ColorsType } from "src/utils";

export default function HeaderEltern(): preact.VNode {
  const theme = useTheme();
  const colors: ColorsType = {
    color: theme.palette.orange.main,
    backgroundColor: "#F1F0E5",
  };

  return (
    <Header
      activeRoute="eltern"
      height={1028}
      image={eltern}
      lead="Man kann Kindern soziale Kompetenz nicht beibringen, man kann ihnen keine innere Stärke anerziehen, man kann ihnen Mitgefühl nicht vermitteln. Solche Kompetenzen müssen erfahren werden."
      palette={colors}
      subTitle="Die Alternative für dein Kind"
    />
  );
}
