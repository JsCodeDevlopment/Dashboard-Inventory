"use client";

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export interface BarChart {
  carregadores: number[];
  fones: number[];
  capinhas: number[];
  concertos: number[];
}

const dataChart = {
  carregadores: [2, 8, 12, 16, 10, 14, 2],
  fones: [3, 7, 11, 15, 9, 13, 0],
  capinhas: [4, 10, 14, 18, 12, 16, 6],
  concertos: [10, 19, 23, 27, 25, 30, 1],
} as BarChart;

export const BarChartAlerts: React.FC = () => {
  const data = {
    labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"],
    datasets: [
      {
        label: " Carregadores",
        data: dataChart.carregadores,
        backgroundColor: "rgba(248, 40, 90, 0.8)",
      },
      {
        label: " Concertos",
        data: dataChart.concertos,
        backgroundColor: "rgba(255, 193, 7, 0.8)",
      },
      {
        label: " Capinhas",
        data: dataChart.capinhas,
        backgroundColor: "rgba(183, 0, 255, 0.8)",
      },
      {
        label: " Fones",
        data: dataChart.fones,
        backgroundColor: "rgba(0, 204, 153, 0.8)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        title: {
          display: true,
          text: "Volume de vendas",
        },
        beginAtZero: true,
        max: 30,
        ticks: {
          stepSize: 5,
        },
      },
      x: {
        title: {
          display: true,
          text: "Dias da Semana",
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  };

  return (
    <div className="h-full w-full">
      <Bar options={options} data={data} />
    </div>
  );
};
