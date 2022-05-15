export interface MakeMyCardProps {
  bgCard: string;
  bgDigram: string;
  brand: ContentsProps;
  temperature: ContentsProps;
  beans: ContentsProps;
  coffee: ContentsProps;
  bottle: ContentsProps;
}

export interface ContentsProps {
  thumbnail?: string;
  name: string;
  description: string;
}
