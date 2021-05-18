import Footer from "components/footer";
import preact from "preact";
import Begeisterung from "sections/vision/begeisterung";
import BlickInDieZukunft from "sections/vision/blickInDieZukunft";
import DreckUnterDenNaegeln from "sections/vision/dreckUnterDenNaegeln";
import HeaderVision from "sections/vision/headerVision";
import NaeheVertrauenFreiheit from "sections/vision/naeheVertrauerFreiheit";

export default function Vision(): preact.VNode {
  return (
    <div>
      <HeaderVision />
      <NaeheVertrauenFreiheit />
      <DreckUnterDenNaegeln />
      <BlickInDieZukunft />
      <Begeisterung />
      <Footer />
    </div>
  );
}
