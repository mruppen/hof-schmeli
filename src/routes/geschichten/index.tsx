import { Container } from "@material-ui/core";
import preact from "preact";
import Footer from "../../components/footer";
import ZitatBaeumeWurzeln from "../../components/zitatBaeumeWurzeln.tsx";
import Dokumente from "../../sections/geschichten/dokumente";
import DokumenteUndLizenz from "../../sections/geschichten/dokumenteUndLizenz";
import HeaderGeschichten from "../../sections/geschichten/headerGeschichten";

export default function Geschichten(): preact.VNode {
  return (
    <Container disableGutters maxWidth={false}>
      <HeaderGeschichten />
      <Dokumente />
      <DokumenteUndLizenz />
      <ZitatBaeumeWurzeln />
      <Footer />
    </Container>
  );
}
