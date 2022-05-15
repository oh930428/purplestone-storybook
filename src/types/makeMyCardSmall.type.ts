export interface MakeMyCardSmallProps {
  bgCard: string;
  bgDigram: string;
  userName: string;
  tasteIcon: TasteIconProps;
  tasteDigram: TasteDigramProps;
}

export interface TasteIconProps {
  brandIcon: string;
  beanIcon: string;
  coffeeTypeIcon: string;
  bottleIcon: string;
  temperatureIcon: string;
}

export interface TasteDigramProps {
  brandName: string;
  beanName: string;
  coffeeTypeName: string;
  bottleName: string;
  temperature: string;
}
