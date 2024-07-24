"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
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
  overspeed: number[];
  longStop: number[];
  routeDeviation: number[];
  quickAccelerations: number[];
  hardBrakings: number[];
}

const dataChart = {
  overspeed: [5, 20, 30, 40, 50, 60, 5],
  longStop: [15, 25, 35, 45, 55, 65, 12],
  routeDeviation: [20, 30, 40, 50, 85, 70, 34],
  quickAccelerations: [25, 35, 45, 55, 65, 75, 35],
  hardBrakings: [30, 40, 50, 6, 70, 80, 17],
} as BarChart;

export const BarChartAlerts: React.FC = () => {
  const data = {
    labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"],
    datasets: [
      {
        label: " 0-30min",
        data: dataChart.overspeed,
        backgroundColor: "rgba(248, 40, 90, 0.8)",
      },
      {
        label: " 30-60min",
        data: dataChart.hardBrakings,
        backgroundColor: "rgba(27, 132, 255,  0.8)",
      },
      {
        label: " 60-90min",
        data: dataChart.quickAccelerations,
        backgroundColor: "rgba(255, 193, 7, 0.8)",
      },
      {
        label: " 90-120min",
        data: dataChart.routeDeviation,
        backgroundColor: "rgba(183, 0, 255, 0.8)",
      },
      {
        label: " 120min+",
        data: dataChart.longStop,
        backgroundColor: "rgba(0, 204, 153, 0.8)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        title: {
          display: true,
          text: "Qauantidade de Alunos",
        },
        beginAtZero: true,
        max: 100,
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
