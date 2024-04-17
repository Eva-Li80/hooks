import { useState } from "react";

export const useClickCounter = (
  start: number,
  step: number,
  max: number,
  min: number,
) => {
  const [clickCount, setClickCount] = useState<number>(start);

  const incrementClick = () => {
    if (clickCount + step <= max) {
      setClickCount(clickCount + step);
    }
  };

  const decrementClick = () => {
    if (clickCount - step >= min) {
    setClickCount(clickCount - step);
    }
  };

  const resetClick = () => {
    setClickCount(start);
  };

  return {
    clickCount,
    decrementClick,
    incrementClick,
    resetClick,
  };
};
