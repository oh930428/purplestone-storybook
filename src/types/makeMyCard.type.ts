export interface IMakeMyCard {
  brand: IContents;
  temperature: IContents;
  beans: IContents;
  coffeeType: IContents;
  syrup: IContents;
}

export interface IContents {
  thumbnail?: string;
  name: string;
  description: string;
}
