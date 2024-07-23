"use client";

import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

export interface PieChart {
  active: number;
  inactive: number;
  concluding: number;
}

const data = {
  active: 122,
  inactive: 33,
  concluding: 20,
} as PieChart;

export const PieChartVehicleStatus: React.FC = () => {
  Chart.register(ArcElement, Tooltip, Legend);

  return (
    <div className="w-full flex-1">
      <Doughnut
        data={{
          labels: ["Ativos", "Inativos", "Concluding"],
          datasets: [
            {
              label: " Alunos",
              data: [data.active, data.inactive, data.concluding],
              backgroundColor: ["#0099ff", "#FFD700", "#FC6075"],
              borderColor: ["#0099ff", "#FFD700", "#FC6075"],
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
