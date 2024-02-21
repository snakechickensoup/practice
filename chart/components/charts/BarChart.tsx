import React, { useMemo } from "react";
import { AreaClosed, Bar } from "@visx/shape";
import { Group } from "@visx/group";
import { GradientTealBlue, LinearGradient } from "@visx/gradient";
import { LetterFrequency } from "@visx/mock-data/lib/mocks/letterFrequency";
import { scaleBand, scaleLinear } from "@visx/scale";
import { AppleStock } from "@visx/mock-data/lib/mocks/appleStock";
import { AxisBottom, AxisLeft, AxisScale } from "@visx/axis";
import { getDate, getStockValue } from "@/app/page";
import { curveMonotoneX } from "d3";

const verticalMargin = 120;

const axisColor = "#ffffff";
const axisBottomTickLabelProps = {
  textAnchor: "middle" as const,
  fontFamily: "Arial",
  fontSize: 10,
};

const axisLeftTickLabelProps = {
  dx: "-0.25em",
  dy: "0.25em",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "end" as const,
};

type BarProps = {
  data: AppleStock[];
  gradientColor: string;
  xScale: AxisScale<number>;
  yScale: AxisScale<number>;
  width: number;
  height: number;
  yMax: number;
  margin: { top: number; right: number; bottom: number; left: number };
  hideBottomAxis?: boolean;
  hideLeftAxis?: boolean;
  top?: number;
  left?: number;
  children?: React.ReactNode;
};

export default function Example(props: BarProps) {
  const { width, height, data, xScale, yMax, margin, yScale, children } = props;

  return width < 10 ? null : (
    <svg width={width} height={height}>
      <GradientTealBlue id="teal" />
      <rect width={width} height={height} fill="url(#teal)" rx={14} />
      <Group top={margin.top} left={40}>
        {data.map((d) => {
          const date = getDate(d);
          const barWidth = 2;
          const barHeight = yMax - (yScale(getStockValue(d)) ?? 0);
          const barX = xScale(date);
          const barY = yMax - barHeight;

          return (
            <Bar
              key={`bar-${getStockValue(d) + getDate(d).getTime()}`}
              x={barX}
              y={barY}
              width={barWidth}
              height={barHeight}
              fill="#000000"
            />
          );
        })}
        <AxisBottom
          top={yMax}
          scale={xScale}
          numTicks={10}
          stroke={axisColor}
          tickStroke={axisColor}
          tickLabelProps={axisBottomTickLabelProps}
        />
        <AxisLeft
          scale={yScale}
          numTicks={10}
          stroke={axisColor}
          tickStroke={axisColor}
          tickLabelProps={axisLeftTickLabelProps}
        />
        {children}
      </Group>
    </svg>
  );
}
