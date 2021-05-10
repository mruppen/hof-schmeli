import { Container } from "@material-ui/core";
import preact from "preact";
import Footer from "../../components/footer";
import HeaderGeschichten from "../../components/headers/geschichten";

export default function Geschichten(): preact.VNode {
  return (
    <Container disableGutters maxWidth={false}>
      <HeaderGeschichten />
      <Footer />
    </Container>
  );
}
