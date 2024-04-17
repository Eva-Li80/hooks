import { useCounter } from "../../Hooks/CustomHooks/useCounter";
import { CounterProps } from "../../Utils/types";

const Counter = ({ start, min, max, step }: CounterProps) => {
  const {
    count,
    increaseCount,
    decreaseCount,
    resetCount,
    setMaxValue,
    setMinValue,
    isEven,
  } = useCounter(start, min, max, step );

  return (
    <>
      <div className="counter">
        <p className="count">Count: {count}</p>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
        <button onClick={resetCount}>Reset</button>
        <button onClick={setMaxValue}>Set Max</button>
        <button onClick={setMinValue}>Set Min</button>
        <p className={isEven ? "sant" : "falskt"}>
          {isEven ? "sant" : "falskt"}
        </p>
      </div>
    </>
  );
};

export default Counter;
