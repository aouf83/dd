import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";

// Example dataset tracking completion rates for each of the 12 months
const monthlyData = [
  { month: "January", completionRate: 10 },
  { month: "February", completionRate: 20 },
  { month: "March", completionRate: 55 },
  { month: "April", completionRate: 15 },
  { month: "May", completionRate: 50 },
  { month: "June", completionRate: 65 },
  { month: "July", completionRate: 88 },
  { month: "August", completionRate: 92 },
  { month: "September", completionRate: 48 },
  { month: "October", completionRate: 24 },
  { month: "November", completionRate: 19 },
  { month: "December", completionRate: 13 },
];

function valueFormatter(value) {
  return `${value}%`;
}

const chartSetting = {
  yAxis: [
    {
      label: "Completion (%)",
    },
  ],
  series: [
    { dataKey: "completionRate", label: "Completion Rate", valueFormatter },
  ],
  height: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: "translateX(-10px)",
    },
  },
};

export default function MonthlyCompletionChart() {
  return (
    <div style={{ width: "100%" }}>
      <BarChart
        dataset={monthlyData}
        xAxis={[
          {
            scaleType: "band",
            dataKey: "month",
            tickPlacement: "middle",
            tickLabelPlacement: "middle",
          },
        ]}
        {...chartSetting}
      />
    </div>
  );
}
