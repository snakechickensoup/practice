"use client";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
interface Props {
  data: number[];
  width: number;
  height: number;
  margin: { top: number; right: number; bottom: number; left: number };
}

const LinePlot = (props: Props) => {
  const {
    data,
    width,
    height,
    margin: { top, right, bottom, left },
  } = props;

  const gx = useRef(null);
  const gy = useRef(null);
  const x = d3.scaleLinear([0, data.length - 1], [left, width - right]);
  const y = d3.scaleLinear(d3.extent(data), [height - bottom, top]);
  const line = d3.line((d, i) => x(i), y);

  useEffect(() => void d3.select(gx.current).call(d3.axisBottom(x)), [gx, x]);
  useEffect(() => void d3.select(gy.current).call(d3.axisLeft(y)), [gy, y]);

  return (
    <svg width={width} height={height}>
      <g ref={gx} transform={`translate(0,${height - bottom})`} />
      <g ref={gy} transform={`translate(${left},0)`} />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        d={line(data)}
      />
      <g fill="black" stroke="currentColor" strokeWidth={1.5}>
        {data.map((d, i) => (
          <circle key={i} cx={x(i)} cy={y(d)} r="2.5" />
        ))}
      </g>
    </svg>
  );
};

export default LinePlot;
