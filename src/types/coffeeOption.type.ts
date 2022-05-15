export interface CoffeeOptionProps {
  bgCircle: string;
  bgCircleActive: string;
  name: string;
  thumbnail: CoffeeOptionIconsProps[];
  isSelected?: boolean;
}

export interface CoffeeOptionIconsProps {
  id: number;
  name: string;
  image: string;
}
