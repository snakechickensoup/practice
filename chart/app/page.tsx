"use client";
import BarChart from "@/components/charts/BarChart";
import { letterFrequency } from "@visx/mock-data";
import { ParentSize } from "@visx/responsive";
import React from "react";

const data = letterFrequency.slice(5);

const Home = () => {
  return (
    <div className="w-56 h-56">
      <ParentSize>
        {({ width, height }) => (
          <BarChart data={data} width={width} height={height} />
        )}
      </ParentSize>
    </div>
  );
};

export default Home;
