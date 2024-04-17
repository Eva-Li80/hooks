import { useClickCounter } from "../../Hooks/CustomHooks/useClickCounter";

type ClickCounterProps = {
  buttonTextAdd: string;
  buttonTextRemove: string;
};

const ClickCounter = ({
  buttonTextRemove,
  buttonTextAdd,
}: ClickCounterProps) => {
  const { clickCount, decrementClick, incrementClick, resetClick } =
    useClickCounter(0, 1, 10, 0);

  return (
    <div className="clickcounter">
      <p className="click">Antal klick: {clickCount}</p>
      <div className="btn">
        <button onClick={decrementClick}>{buttonTextRemove}</button>
        <button onClick={incrementClick}>{buttonTextAdd}</button>
        <button onClick={resetClick}>Återställ</button>
      </div>
    </div>
  );
};

export default ClickCounter;
