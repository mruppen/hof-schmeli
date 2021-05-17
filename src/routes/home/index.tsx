import preact from "preact";
import AnmeldungKontakt from "../../components/anmeldungKontakt";
import Footer from "../../components/footer";
import ZitatBaeumeWurzeln from "../../components/zitatBaeumeWurzeln.tsx";
import DorfZitat from "../../sections/home/dorfZitat";
import HeaderHome from "../../sections/home/headerHome";
import SoLerntDeinKind from "../../sections/home/soLerntDeinKind";

export default function Home(): preact.VNode {
  return (
    <div>
      <HeaderHome />
      <SoLerntDeinKind />
      <ZitatBaeumeWurzeln />
      <AnmeldungKontakt />
      <DorfZitat />
      <Footer />
    </div>
  );
}
