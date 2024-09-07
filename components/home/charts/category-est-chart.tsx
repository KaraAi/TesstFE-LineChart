"use client";

import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts";
import "./style.css";

const chartData = [
  {
    name: "Danh mục A",
    value: +75,
    fill: "#ff7300",
  },
  {
    name: "Danh mục B",
    value: -25,
    fill: "#82ca9d",
  },
  {
    name: "Danh mục C",
    value: +25,
    fill: "#ffc658",
  },
];

const chartConfig = {} satisfies ChartConfig;

export const CategoryEstimateChart = () => {
  return (
    <ChartContainer config={chartConfig} className="min-h-[100px] h-48 w-full ">
      <BarChart
        accessibilityLayer
        layout="vertical"
        data={chartData}
        margin={{
          top: 60,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid horizontal={false} />
        <XAxis type="number" />
        <YAxis
          type="category"
          dataKey="name"
          className="text-lg"
          textAnchor="end"
          tick={{
            dx: -50,
          }}
          tickLine={false}
          axisLine={false}
          width={150}
        />
        <ReferenceLine x={0} stroke="black" />
        <Bar dataKey="value" name="Giá trị" barSize={20}>
          <LabelList
            dataKey="value"
            position="right"
            fill="#0E7490"
            formatter={(val: number) => `${val}%`}
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
};
