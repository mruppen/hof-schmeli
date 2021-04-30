export enum TeaserKeyEnum {
  Write,
  Log,
  Attitude,
}

export type TeaserKeyLabel = {
  key: TeaserKeyEnum;
  label: string;
};

export const TeaserKeys: TeaserKeyLabel[] = [
  {
    key: TeaserKeyEnum.Write,
    label: "Kinder schreiben",
  },
  {
    key: TeaserKeyEnum.Log,
    label: "Logbuch",
  },
  {
    key: TeaserKeyEnum.Attitude,
    label: "Haltung",
  },
];

export interface TeaserModel {
  keys?: TeaserKeyEnum[];
  image?: string;
  imageCaption?: string;
  title?: string;
  text?: string;
  to?: string;
  toText?: string;
}
