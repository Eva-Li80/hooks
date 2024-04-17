import { useState } from "react";

export const useCounter = (start: number, min: number, max: number, step: number) => {
  const [count, setCount] = useState<number>(start);

  const isEven: boolean = count % 2 === 0

  const increaseCount = () => {
    if (count + step <= max ) {
      setCount(count + step);
    }
  };

  const decreaseCount = () => {
    if (count - step >= min) {
      setCount(count - step);
    }
  };

  const resetCount = () => {
    setCount(start);
  };

  const setMaxValue = () => {
    setCount(max);
  };

  const setMinValue = () => {
    setCount(min);
  };

  return {
    count,
    increaseCount,
    decreaseCount,
    resetCount,
    setMaxValue,
    setMinValue,
    isEven
  };
};
