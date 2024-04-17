import { useArray } from "../../Hooks/CustomHooks/useArray";

const ArrayComponent = () => {
  const { array, set, push, remove, filter, update, clear, reset } = useArray([  1, 2, 3, 4, 5, 6,]);
  return (
    <div className="array">
      <div className="arraynumber">{array.join(", ")}</div>
      <div className="btn">
        <button onClick={() => remove(1)}>Ta bort index 2</button>
        <button onClick={() => push(7)}>Lägg till nr 7</button>
        <button onClick={() => set([1, 2])}>Spara 1 och 2</button>
        <button onClick={() => filter((num: number) => num < 3)}>
          Behåll nummer under 3
        </button>
        <button onClick={() => update(1, 9)}>updater 2 till 9</button>
        <button onClick={clear}>Rensa</button>
        <button onClick={reset}>Återställ</button>
      </div>
    </div>
  );
};

export default ArrayComponent;
