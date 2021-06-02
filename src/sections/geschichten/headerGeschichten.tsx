import { useTheme } from "@material-ui/core";
import Header from "components/header";
import geschichten from "data/images/header/geschichten.png";
import preact from "preact";
import { ColorsType } from "src/utils";

export default function HeaderGeschichten(): preact.VNode {
  const theme = useTheme();
  const colors: ColorsType = {
    color: "white",
    backgroundColor: theme.palette.yellow.main,
  };
  return (
    <Header
      activeRoute="geschichten"
      height={940}
      image={geschichten}
      palette={colors}
      subTitle="Erzählt Geschichten"
    />
  );
}
