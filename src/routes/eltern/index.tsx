import { Container, createStyles, makeStyles } from "@material-ui/core";
import preact from "preact";
import ContactSubscribe from "../../components/contactSubscribe";
import ContentImportantAssets from "../../components/contentImportantAssets";
import ContentTeaserElternInteressiert from "../../components/contentTeaserElternInteressiert";
import ContentTeaserSnailEltern from "../../components/contentTeaserSnailEltern";
import ContentTeaserWayOfLearning from "../../components/contentTeaserWayOfLearning";
import ShortInformation from "../../components/eltern/shortInformation";
import Footer from "../../components/footer";
import HeaderEltern from "../../components/headers/eltern";

const useStyles = makeStyles(() =>
  createStyles({
    margin20: {
      marginBottom: 20,
    },
    margin92: {
      marginTop: 92,
    },
    margin100: {
      marginTop: -200,
    },
    margin112: {
      marginTop: 112,
    },
  })
);

export default function Eltern(): preact.VNode {
  const classes = useStyles();

  return (
    <Container disableGutters maxWidth={false}>
      <HeaderEltern />
      <ShortInformation />
      <ContentImportantAssets />
      <ContentTeaserSnailEltern />
      <ContentTeaserWayOfLearning />
      <ContentTeaserElternInteressiert />
      <ContactSubscribe />
      <Footer />
    </Container>
  );
}
