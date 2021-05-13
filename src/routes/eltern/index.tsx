import { Container } from "@material-ui/core";
import preact from "preact";
import ContactSubscribe from "../../components/contactSubscribe";
import ContentImportantAssets from "../../components/contentImportantAssets";
import ContentTeaserElternInteressiert from "../../components/contentTeaserElternInteressiert";
import ContentTeaserSchule from "../../components/contentTeaserSchule";
import ContentTeaserSnailEltern from "../../components/contentTeaserSnailEltern";
import ContentTeaserWayOfLearning from "../../components/contentTeaserWayOfLearning";
import ShortInformation from "../../components/eltern/shortInformation";
import Footer from "../../components/footer";
import HeaderEltern from "../../components/headers/eltern";

export default function Eltern(): preact.VNode {
  return (
    <Container disableGutters maxWidth={false}>
      <HeaderEltern />
      <ShortInformation />
      <ContentImportantAssets />
      <ContentTeaserSnailEltern />
      <ContentTeaserWayOfLearning />
      <ContentTeaserElternInteressiert />
      <ContentTeaserSchule />
      <ContactSubscribe />
      <Footer />
    </Container>
  );
}
