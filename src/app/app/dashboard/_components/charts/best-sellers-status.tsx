"use client";

import { ArcElement, Chart, Legend, Tooltip } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";

export interface PieChart {
  carregadores: number;
  fones: number;
  capinhas: number;
  fix: number;
}

const data = {
  carregadores: 122,
  fones: 33,
  capinhas: 20,
  fix: 230,
} as PieChart;

export const BestSellersStatus: React.FC = () => {
  Chart.register(ArcElement, Tooltip, Legend);

  return (
    <div className="w-full flex-1">
      <Doughnut
        data={{
          labels: ["Carregadores", "Fones", "Capinhas", "Concertos"],
          datasets: [
            {
              label: " Total",
              data: [data.carregadores, data.fones, data.capinhas, data.fix],
              backgroundColor: ["#0099ff", "#FFD700", "#FC6075", "#f0f0f0"],
              borderColor: ["#0099ff", "#FFD700", "#FC6075", "#f0f0f0"],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
            },
          },
        }}
      />
    </div>
  );
};
