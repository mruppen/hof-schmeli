import { Container } from "@material-ui/core";
import preact from "preact";
import Footer from "../../components/footer";
import Chancengleichheit from "../../sections/gemeinschaft/chancengleichheit";
import HeaderGemeinschaft from "../../sections/gemeinschaft/headerGemeinschaft";
import IchHelfeMit from "../../sections/gemeinschaft/ichHelfeMit";
import MitWenigVielBewirken from "../../sections/gemeinschaft/mitWenigVielBewirken";

export default function Gemeinschaft(): preact.VNode {
  return (
    <Container disableGutters maxWidth={false}>
      <HeaderGemeinschaft />
      <Chancengleichheit />
      <MitWenigVielBewirken />
      <IchHelfeMit />
      <Footer />
    </Container>
  );
}
