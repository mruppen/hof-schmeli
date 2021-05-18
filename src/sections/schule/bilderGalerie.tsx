import Section from "components/section";
import TeaserRow from "components/teaserRow";
import gaestehaus from "data/images/gaestehaus.png";
import landschaft from "data/images/landschaft.png";
import milchHolen from "data/images/milchHolen.png";
import schweine from "data/images/schweine.png";
import tipi from "data/images/tipi.png";
import wohnwagen from "data/images/wohnwagen.png";
import { TeaserModel } from "models/models";

const teasers: TeaserModel[] = [
  {
    image: gaestehaus,
  },
  {
    image: landschaft,
  },
  {
    image: schweine,
  },
  {
    image: wohnwagen,
  },
  {
    image: milchHolen,
  },
  {
    image: tipi,
  },
];

export default function BilderGalerie(): preact.VNode {
  return (
    <Section paddingBottom={80} palette="blueInverted">
      <TeaserRow teasers={teasers} palette="blueInverted" />
    </Section>
  );
}
