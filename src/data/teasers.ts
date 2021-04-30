import { TeaserKeyEnum, TeaserModel } from "../models/models";
import image1 from "./images/milchHolen.png";

export const homeTeasers: TeaserModel[] = [
  {
    text:
      "Schule Bauernhof Schmeli- ein Ort des friedlichen und freudigen Zusammenlebens. Wo Menschen sich gegenseitig helfen, ermutigen und bilden. Kinder sich sicher, geborgen und aufgehoben fühlen können.",
    title: "Mit einer klaren Vision",
    to: "/vision",
    toText: "Mehr erfahren",
  },
  {
    text:
      "In der Schule Bauernhof Schmeli dürfen Kinder Kinder sein. Schulalltag kann mit Lern- und Lebensfreude in naturverbundener Umgebung erlebt werden.",
    title: "In einem lebendigen Umfeld",
    to: "/schule",
    toText: "Mehr erfahren",
  },
  {
    text:
      "Wir sind eine Schule, die Chancengleichheit für alle Kinder bieten will. Dieses Ziel können wir nur gemeinsam und mit Unterstützung erreichen.",
    title: "Mit Solidarität",
    to: "/helfen",
    toText: "Mehr erfahren",
  },
];

export const allTeasers: TeaserModel[] = [
  {
    keys: [TeaserKeyEnum.Log],
    image: image1,
    text:
      "Schule Bauernhof Schmeli – ein Ort des friedlichen und freudigen Zusammenlebens. Wo Menschen sich gegenseitig helfen und ermutigen. Kinder sich sicher, geborgen und aufgehoben fühlen können.",
    title: "Mit einer klaren Vision",
    to: "linkTo",
    toText: "Mehr erfahren",
  },
  {
    keys: [TeaserKeyEnum.Log],
    image: image1,
    text:
      "Ein wesentlicher Faktor erfolgreicher selbstorganisierter Lernkulturen ist die freie Altersmischung.",
    title: "Mit Solidarität",
    to: "linkTo",
    toText: "Mehr erfahren",
  },
  {
    keys: [TeaserKeyEnum.Log],
    image: image1,
    text:
      "In der SBS (Schule Bauernhof „Schmeli“) dürfen Kinder Kinder sein. Ziel ist es, Kindern einen Schulalltag gepaart mit Lern- und Lebensfreude zu ermöglichen.",
    title: "In einem lebendigen Umfeld",
    to: "linkTo",
    toText: "Mehr erfahren",
  },
  {
    keys: [TeaserKeyEnum.Log],
    image: image1,
    text:
      "Schule Bauernhof Schmeli – ein Ort des friedlichen und freudigen Zusammenlebens. Wo Menschen sich gegenseitig helfen und ermutigen. Kinder sich sicher, geborgen und aufgehoben fühlen können.",
    title: "Mit einer klaren Vision",
    to: "linkTo",
    toText: "Mehr erfahren",
  },
  {
    keys: [TeaserKeyEnum.Log],
    image: image1,
    text:
      "Ein wesentlicher Faktor erfolgreicher selbstorganisierter Lernkulturen ist die freie Altersmischung.",
    title: "Mit Solidarität",
    to: "linkTo",
    toText: "Mehr erfahren",
  },
  {
    keys: [TeaserKeyEnum.Log],
    image: image1,
    text:
      "In der SBS (Schule Bauernhof „Schmeli“) dürfen Kinder Kinder sein. Ziel ist es, Kindern einen Schulalltag gepaart mit Lern- und Lebensfreude zu ermöglichen.",
    title: "In einem lebendigen Umfeld",
    to: "linkTo",
    toText: "Mehr erfahren",
  },
];
