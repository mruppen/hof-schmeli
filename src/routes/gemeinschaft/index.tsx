import { Container } from "@material-ui/core";
import preact from "preact";
import ContentTeaserDoMuchWithLittle from "../../components/contentTeaserDoMuchWithLittle";
import ContentTeaserGemeinschaft from "../../components/contentTeaserGemeinschaft";
import Footer from "../../components/footer";
import HeaderGemeinschaft from "../../components/headers/gemeinschaft";

export default function Gemeinschaft(): preact.VNode {
  return (
    <Container disableGutters maxWidth={false}>
      <HeaderGemeinschaft />
      <ContentTeaserGemeinschaft />
      <ContentTeaserDoMuchWithLittle />
      <Footer />
    </Container>
  );
}
