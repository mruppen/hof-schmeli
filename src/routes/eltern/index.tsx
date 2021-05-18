import { Container } from "@material-ui/core";
import AnmeldungKontakt from "components/anmeldungKontakt";
import Footer from "components/footer";
import preact from "preact";
import DasWichtigsteInKuerze from "sections/eltern/dasWichtigsteInKuerze";
import EinTag from "sections/eltern/einTag";
import HeaderEltern from "sections/eltern/headerEltern";
import IchBinInteressiert from "sections/eltern/ichBinInteressiert";
import SchuleAlsGemeinschaft from "sections/eltern/schuleAlsGemeinschaft";
import SoLerntDeinKind from "sections/eltern/soLerntDeinKind";
import Unterstuetzungsverein from "sections/eltern/unterstuetzungsverein";

export default function Eltern(): preact.VNode {
  return (
    <Container disableGutters maxWidth={false}>
      <HeaderEltern />
      <DasWichtigsteInKuerze />
      <EinTag />
      <SchuleAlsGemeinschaft />
      <SoLerntDeinKind />
      <IchBinInteressiert />
      <AnmeldungKontakt />
      <Unterstuetzungsverein />
      <Footer />
    </Container>
  );
}
