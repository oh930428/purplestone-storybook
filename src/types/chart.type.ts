export interface ChartProps {
  labels: string[];
  datasets: ChartDataSetProps;
  styles: ChartStyleProps;
  options: ChartOptionProps;
}

export interface ChartDataSetProps {
  label: string;
  data: number[];
  backgroundColor: string[];
  borderColor: string[];
  borderWidth: number;
  hoverOffset: number;
}

export interface ChartStyleProps {
  width: number;
  height: number;
}

export interface ChartOptionProps {
  maintainAspectRatio: boolean;
  layout: {
    padding: {
      top: number;
      right: number;
      bottom: number;
      left: number;
    };
  };
  plugins: {
    legend: {
      display: boolean;
      align: 'start' | 'center' | 'end' | undefined;
      position: 'top' | 'left' | 'bottom' | 'right' | 'chartArea' | undefined;
      labels: {
        boxWidth: number;
        font: {
          size: number;
          family: string;
          lineHeight: number;
          weight: string;
        };
      };
    };
  };
}
