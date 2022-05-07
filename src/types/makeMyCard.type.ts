export interface IMakeMyCard {
  brand: IContents;
  temperature: IContents;
  beans: IContents;
  time: IContents;
  syrup: IContents;
}

export interface IContents {
  thumbnail?: string;
  name: string;
  description: string;
}
