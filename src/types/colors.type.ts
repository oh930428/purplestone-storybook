export interface ColorsProps {
  bgImage: string;
  title: string;
  subTitle: string;
  colorCardList: ColorCardProps[];
}

export interface ColorCardProps {
  cardColor: string;
  cardBorder?: boolean;
  colorTitle: string;
  colorValue: string;
  useColor: string;
}
