import { Container } from "@material-ui/core";
import preact from "preact";
import HeaderVision from "../../components/headers/vision";

export default function Vision(): preact.VNode {
  return (
    <Container disableGutters>
      <HeaderVision />
    </Container>
  );
}
