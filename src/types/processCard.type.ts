export interface ProcessCardProps {
  title: string;
  tasteType: TasteTypeProps[];
}

export interface TasteTypeProps {
  id: number;
  name: string;
  thumbnail: string;
}
