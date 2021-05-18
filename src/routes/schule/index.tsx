import { Container } from "@material-ui/core";
import Footer from "components/footer";
import preact from "preact";
import BilderGalerie from "sections/schule/bilderGalerie";
import DieBauernhofSchule from "sections/schule/dieBauernhofSchule";
import GenossenschaftUnterstuetzungsverein from "sections/schule/genossenschaftUnterstuetzungsverein";
import HeaderSchule from "sections/schule/headerSchule";
import Personen from "sections/schule/personen";
import SchuleZitat from "sections/schule/schuleZitat";
import Team from "sections/schule/team";

export default function Schule(): preact.VNode {
  return (
    <Container disableGutters maxWidth={false}>
      <HeaderSchule />
      <DieBauernhofSchule />
      <BilderGalerie />
      <GenossenschaftUnterstuetzungsverein />
      <Team />
      <Personen />
      <SchuleZitat />
      <Footer />
    </Container>
  );
}
