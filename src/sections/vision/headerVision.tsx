import { useTheme } from "@material-ui/core";
import Header from "components/header";
import vision from "data/images/header/vision.png";
import preact from "preact";
import { ColorsType } from "src/utils";

export default function HeaderVision(): preact.VNode {
  const theme = useTheme();
  const colors: ColorsType = {
    color: theme.palette.orange.main,
    backgroundColor: "#F1F0E5",
  }  ;

  return (
    <Header
      activeRoute="vision"
      height={940}
      image={vision}
      lead="Schule Bauernhof Schmeli – ein Ort des friedlichen und freudigen Zusammenlebens. Wo Menschen sich gegenseitig helfen und ermutigen. Kinder sich sicher, geborgen und aufgehoben fühlen können."
      palette={colors}
      subTitle="Die Alternative für dein Kind"
    />
  );
}
