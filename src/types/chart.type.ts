export interface ChartProps {
  labels: string[];
  datasets: ChartDataSetProps;
}

export interface ChartDataSetProps {
  label: string;
  data: number[];
  backgroundColor: string[];
  borderColor: string[];
  borderWidth: number;
  hoverOffset: number;
}
