import image1 from "./images/kinderHolenMilch.png";
import { TeaserModel, TeaserKeyEnum } from "../models/models";

export const allTeasers: TeaserModel[] = [
  {
    keys: [TeaserKeyEnum.Log],
    image: image1,
    text:
      "Schule Bauernhof Schmeli – ein Ort des friedlichen und freudigen Zusammenlebens. Wo Menschen sich gegenseitig helfen und ermutigen. Kinder sich sicher, geborgen und aufgehoben fühlen können.",
    title: "Mit einer klaren Vision",
    to: "linkTo",
    toText: "Mehr erfahren"
  },
  {
    keys: [TeaserKeyEnum.Log],
    image: image1,
    text:
      "Ein wesentlicher Faktor erfolgreicher selbstorganisierter Lernkulturen ist die freie Altersmischung.",
    title: "Mit Solidarität",
    to: "linkTo",
    toText: "Mehr erfahren"
  },
  {
    keys: [TeaserKeyEnum.Log],
    image: image1,
    text:
      "In der SBS (Schule Bauernhof „Schmeli“) dürfen Kinder Kinder sein. Ziel ist es, Kindern einen Schulalltag gepaart mit Lern- und Lebensfreude zu ermöglichen.",
    title: "In einem lebendigen Umfeld",
    to: "linkTo",
    toText: "Mehr erfahren"
  },
];
