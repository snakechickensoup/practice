"use client";
import BrushHandle from "@/components/BrushHandle";
import BarChart from "@/components/charts/BarChart";
import { Brush } from "@visx/brush";
import BaseBrush from "@visx/brush/lib/BaseBrush";
import { Bounds } from "@visx/brush/lib/types";
import { appleStock } from "@visx/mock-data";
import { AppleStock } from "@visx/mock-data/lib/mocks/appleStock";
import { PatternLines } from "@visx/pattern";
import { ParentSize } from "@visx/responsive";
import { scaleTime, scaleLinear } from "@visx/scale";
import { max, extent } from "@visx/vendor/d3-array";
import React, { useMemo, useRef, useState } from "react";

const stock = appleStock.slice(10);
const brushMargin = { top: 10, bottom: 15, left: 50, right: 20 };
const chartSeparation = 30;
const patternId = "brush_pattern";
const gradientId = "brush_gradient";
export const accentColor = "#f6acc8";
export const background = "#584153";
export const background2 = "#af8baf";
const selectedBrushStyle = { fill: `url(#${patternId})`, storke: "black" };

export const getDate = (d: AppleStock) => new Date(d.date);
export const getStockValue = (d: AppleStock) => d.close;

const margin = { top: 20, left: 50, bottom: 20, right: 20 };

const Home = () => {
  const brushRef = useRef<BaseBrush | null>(null);
  const [filteredStock, setFilteredStock] = useState(stock);

  const onBrushChange = (domain: Bounds | null) => {
    if (!domain) return;
    const { x0, x1, y0, y1 } = domain;
    const stockCopy = stock.filter((s) => {
      const x = getDate(s).getTime();
      const y = getStockValue(s);
      return x > x0 && x < x1 && y > y0 && y < y1;
    });

    setFilteredStock(stockCopy);
  };

  const width = 800;
  const height = 400;

  const innerHeight = height - margin.top - margin.bottom;
  const topChartBottomMargin = chartSeparation + 10;
  const topChartHeight = 0.8 * innerHeight - topChartBottomMargin;
  const bottomChartHeight = innerHeight - topChartHeight - chartSeparation;

  // bounds

  const xMax = Math.max(width - margin.left - margin.right, 0);
  const yMax = Math.max(topChartHeight, 0);
  const xBrushMax = Math.max(width - brushMargin.left - brushMargin.right, 0);
  const yBrushMax = Math.max(
    bottomChartHeight - brushMargin.top - brushMargin.bottom,
    0
  );

  // scales
  const dateScale = useMemo(
    () =>
      scaleTime<number>({
        range: [0, xMax],
        domain: extent(filteredStock, getDate) as [Date, Date],
      }),
    [xMax, filteredStock.length]
  );

  const stockScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [yMax, 0],
        domain: [0, max(filteredStock, getStockValue) || 0],
        nice: true,
      }),
    [yMax, filteredStock.length]
  );

  const brushDateScale = useMemo(
    () =>
      scaleTime<number>({
        range: [0, xBrushMax],
        domain: extent(stock, getDate) as [Date, Date],
      }),
    [xBrushMax]
  );

  const brushStockScale = useMemo(
    () =>
      scaleLinear({
        range: [yBrushMax, 0],
        domain: [0, max(stock, getStockValue) || 0],
        nice: true,
      }),
    [yBrushMax]
  );

  const initialBrushPosition = useMemo(
    () => ({
      start: { x: brushDateScale(getDate(stock[50])) },
      end: { x: brushDateScale(getDate(stock[100])) },
    }),
    [brushDateScale]
  );

  return (
    <div className="w-56 h-56">
      <ParentSize>
        {({ width, height }) => (
          <>
            <BarChart
              data={filteredStock}
              width={800}
              height={400}
              margin={{ ...margin, bottom: 2 }}
              yMax={yMax}
              xScale={dateScale}
              yScale={stockScale}
              gradientColor={background2}
            />
            <BarChart
              data={stock}
              width={800}
              height={400}
              yMax={yBrushMax}
              xScale={brushDateScale}
              yScale={brushStockScale}
              margin={brushMargin}
              top={topChartHeight + topChartBottomMargin + margin.top}
              gradientColor={background2}
            >
              <Brush
                xScale={brushDateScale}
                yScale={brushStockScale}
                width={xBrushMax}
                height={yBrushMax}
                margin={brushMargin}
                handleSize={4}
                innerRef={brushRef}
                resizeTriggerAreas={["left", "right"]}
                brushDirection="horizontal"
                initialBrushPosition={initialBrushPosition}
                onChange={onBrushChange}
                onClick={() => setFilteredStock(stock)}
                selectedBoxStyle={selectedBrushStyle}
                useWindowMoveEvents
                renderBrushHandle={(props) => <BrushHandle {...props} />}
              />
            </BarChart>
          </>
        )}
      </ParentSize>
    </div>
  );
};

export default Home;
