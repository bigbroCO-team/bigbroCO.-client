import { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js';
import * as S from './style';

import { theme } from 'share-components';

interface Props {
  subScriberNumber: string[];
  todaySubScriber: string[];
  date: number[];
}

const Chart: React.FC<Props> = ({
  subScriberNumber,
  todaySubScriber,
  date,
}) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<ChartJS | null>(null);

  useEffect(() => {
    const canvas = chartRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const createChart = () => {
      ChartJS.register(
        LineController,
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Tooltip
      );
      chartInstance.current = new ChartJS(ctx, {
        type: 'line',
        data: {
          labels: date.map((value) => value.toString()),
          datasets: [
            {
              label: 'Subscriber Number',
              data: subScriberNumber.map((value) => parseInt(value, 10)),
              borderColor: theme.color.main[50],
              backgroundColor: theme.color.main[50],
              pointRadius: 6,
              pointBorderWidth: 2,
              pointBorderColor: theme.color.white,
              pointHoverRadius: 8,
              pointHoverBorderColor: theme.color.white,
              fill: false,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          resizeDelay: 1,
          scales: {
            x: {
              display: true,
              grid: {
                display: true,
                color: function (context) {
                  if (context.tick.value > 0) {
                    return theme.color.grey[700];
                  }
                  return theme.color.white;
                },
                lineWidth: 1,
              },
            },
            y: {
              beginAtZero: true,
              max:
                Math.max(
                  ...subScriberNumber.map((value) => parseInt(value, 10))
                ) + 10,
              grid: {
                display: true,
                color: function (context) {
                  if (context.tick.value > 0) {
                    return theme.color.grey[700];
                  }
                  return theme.color.white;
                },
                lineWidth: 1,
              },
            },
          },
          plugins: {
            tooltip: {
              callbacks: {
                title: () => {
                  return `일간 가입수`;
                },
                label: (tooltipItem) => {
                  const index = tooltipItem.dataIndex;
                  return `${todaySubScriber[index]} 🔺`;
                },
              },
              backgroundColor: theme.color.grey[800],
              displayColors: false,
              padding: 12,
              titleColor: theme.color.grey[300],
              titleMarginBottom: 4,
              titleAlign: 'center',
              titleFont: {
                size: 16,
                weight: 400,
                style: 'normal',
              },
              bodyFont: {
                size: 24,
                weight: 600,
                style: 'normal',
              },
            },
          },
        },
      });
    };

    const destroyChart = () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };

    destroyChart();
    createChart();

    return () => {
      destroyChart();
    };
  }, [subScriberNumber, todaySubScriber, date]);

  return (
    <S.Wrapper>
      <canvas ref={chartRef} />
    </S.Wrapper>
  );
};

export default Chart;
