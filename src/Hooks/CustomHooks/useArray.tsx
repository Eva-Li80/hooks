import { useState } from "react";

export const useArray = ( defaultValue: number[]) => {
  const [array, setArray] = useState<number[]>(defaultValue);

  const push = (element: number) => {
    setArray((a) => [...a, element]);
  };

  const filter = (callback: (value: number, index: number, array: number[]) => boolean) => {
    setArray((a) => a.filter(callback));
  };

  const update = (index: number, newElement: number) => {
    setArray((a) => [...a.slice(0, index), newElement, ...a.slice(index + 1)]);
  };

  const remove = (index: number) => {
    setArray((a) => [...a.slice(0, index), ...a.slice(index + 1)]);
  };

  const clear = () => {
    setArray([]);
  };

  const reset = () => {
    setArray(defaultValue)
  }

  return { array, set: setArray, push, filter, update, remove, clear, reset };
};
