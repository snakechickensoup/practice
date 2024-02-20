import LinePlot from "@/components/LinePlot";
import React from "react";

const Home = () => {
  const data = [30, 40, 70, 100, 30];

  return (
    <div className="flex flex-col ">
      <LinePlot
        data={data}
        width={640}
        height={400}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      />
    </div>
  );
};

export default Home;
