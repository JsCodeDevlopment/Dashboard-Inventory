"use client";

import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

export interface PieChart {
  moving: number;
  stopped: number;
  offline: number;
}

const data = {
  moving: 12,
  stopped: 3,
  offline: 2,
} as PieChart;

export const PieChartVehicleStatus: React.FC = () => {
  Chart.register(ArcElement, Tooltip, Legend);

  return (
    <div className="w-full flex-1">
      <Doughnut
        data={{
          labels: ["Em movimento", "Parado", "Offline"],
          datasets: [
            {
              label: " Veículos",
              data: [data.moving, data.stopped, data.offline],
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
