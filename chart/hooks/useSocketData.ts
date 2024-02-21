"use client";

import { useEffect, useState } from "react";

export const useSocketData = () => {
  const [socketData, setSocketData] = useState();

  useEffect(() => {
    const ws = new WebSocket(
      "wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin"
    );

    ws.onopen = () => {
      console.log("open socket");
    };

    ws.onmessage = (evt) => {
      setSocketData(JSON.parse(evt.data));
    };

    ws.onclose = () => {
      console.log("close socket");
    };

    return () => ws.close();
  }, []);

  return { socketData };
};
