import { makeStyles } from "@material-ui/core";
import preact from "preact";
import ContentTeaserRightDirt from "../../components/contentTeaserRightDirt";
import ContentTeaserRightSnail from "../../components/contentTeaserRightSnail";
import ContentTeaserVision from "../../components/contentTeaserVision";
import Footer from "../../components/footer";
import HeaderVision from "../../components/headers/vision";
import Keywords from "../../components/keywords";

const useStyles = makeStyles({
  image: {
    backgroundSize: "auto",
  },
});

export default function Vision(): preact.VNode {
  return (
    <div>
      <HeaderVision />
      <ContentTeaserVision />
      <ContentTeaserRightDirt />
      <Keywords />
      <ContentTeaserRightSnail />
      <Footer />
    </div>
  );
}
