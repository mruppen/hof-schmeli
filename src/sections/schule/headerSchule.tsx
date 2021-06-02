import Header from "components/header";
import schule from "data/images/header/schule.png";
import preact from "preact";

export default function HeaderSchule(): preact.VNode {
  return (
    <Header
      activeRoute="schule"
      height={1075}
      image={schule}
      lead="In der Schule Bauernhof Schmeli dürfen Kinder Kinder sein. Sie werden individuell gefordert und gefördert. Dabei steht die persönliche Potenzialentfaltung in einem selbstbestimmten und selbstorganisierten Lern-Rhythmus im Vordergrund. Ziel ist es, Kindern einen naturverbundenen Schulalltag, gepaart mit Lern- und Lebensfreude, zu ermöglichen."
      palette="orange"
      subTitle="Wir sind anders"
    />
  );
}
