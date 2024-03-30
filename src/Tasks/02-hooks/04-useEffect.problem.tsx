import { useEffect } from "react";

const useTimeout = (timerMs: number) => {
  useEffect(
    () =>
      setTimeout(() => {
        console.log("Done!");
      }, timerMs),
    [timerMs],
  );
};
