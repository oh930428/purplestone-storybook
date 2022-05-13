export interface IMakeMyCard {
  bgCard: string;
  bgDigram: string;
  brand: IContents;
  temperature: IContents;
  beans: IContents;
  coffee: IContents;
  bottle: IContents;
}

export interface IContents {
  thumbnail?: string;
  name: string;
  description: string;
}
