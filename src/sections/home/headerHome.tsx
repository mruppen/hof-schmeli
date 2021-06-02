import { useTheme } from "@material-ui/core";
import Header from "components/header";
import home from "data/images/header/home.png";
import preact from "preact";
import { ColorsType } from "src/utils";

export default function HeaderHome(): preact.VNode {
  const theme = useTheme();
  const colors: ColorsType = {
    color: theme.palette.green.main,
    backgroundColor: "#EFEDE2",
  };

  return (
    <Header
      activeRoute="/"
      height={880}
      image={home}
      palette={colors}
      subTitle="Wir leben Schule"
    />
  );
}
