import { BrushHandleRenderProps } from "@visx/brush/lib/BrushHandle";
import { Group } from "@visx/group";
import React from "react";

const BrushHandle = (props: BrushHandleRenderProps) => {
  const { x, height, isBrushActive } = props;

  const pathWidth = 6;
  const pathHeight = 12;
  if (!isBrushActive) {
    return null;
  }
  return (
    <Group left={x + pathWidth / 2} top={(height - pathHeight) / 2}>
      <path
        fill="#f2f2f2"
        d="M -4.5 0.5 L 3.5 0.5 L 3.5 15.5 L -4.5 15.5 L -4.5 0.5 M -1.5 4 L -1.5 12 M 0.5 4 L 0.5 12"
        stroke="#999999"
        strokeWidth="1"
        style={{ cursor: "ew-resize" }}
      />
    </Group>
  );
};

export default BrushHandle;
