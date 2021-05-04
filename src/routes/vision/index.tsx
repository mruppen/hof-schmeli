import { Container, Typography, useTheme } from "@material-ui/core";
import preact from "preact";
import HeaderVision from "../../components/headers/vision";
import ContentTeaserVision from "../../components/contentTeaserVision";
import ContentTeaserRight from "../../components/contentTeaserRight";
import dreck from "../../data/images/dreck.png";
import { invert, getColors } from "../../utils";

export default function Vision(): preact.VNode {
  const theme = useTheme();
  return (
    <Container disableGutters>
      <HeaderVision />
      <ContentTeaserVision />
      <ContentTeaserRight image={dreck} palette={invert(getColors(theme, "blue"))} title="Mit Dreck unter den Fingernägeln">
        <Typography variant="body1">
        Mit der engen Verknüpfung zum Bauernhof wollen wir ein Umfeld schaffen, in dem die Kinder Verbundenheit mit der Natur, den Tieren und der Gemeinschaft erleben und lernen können. Ein Umfeld, in dem sie Tag für Tag aktiv Verantwortung für ihr eigenes Tun, für ihr Wohlbefinden, für das Wohlbefinden der Tiere, der Umwelt und der Gemeinschaft und für ihre Bildung übernehmen können.
        </Typography>
      </ContentTeaserRight>
    </Container>
  );
}
