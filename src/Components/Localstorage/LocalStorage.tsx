import { useState } from "react";
import { useLocalStoragee } from "../../Hooks/CustomHooks/useLocalStorage";

const LocalStorage = () => {
  const [value, setValue] = useState("");
  const [storedValue, setStoredValue] = useState("");

  const { setItem, getItem, removeItem } = useLocalStoragee("value");

  const handleSetItem = () => {
    setItem(value);
    setValue("");
  };

  const handleGetItem = () => {
    const newValue = getItem();
    if (newValue !== undefined) {
      setStoredValue(newValue);
    }
  };

  const handleRemoveItem = () => {
    removeItem();
    setStoredValue("");
  };

  return (
    <div className="localstorage">
      <div className="value-container">
        <div className="value">{storedValue}</div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="btn">
      <button onClick={handleSetItem}>Spara</button>
      <button onClick={handleGetItem}>Hämta</button>
      <button onClick={handleRemoveItem}>Ta bort</button>
      </div>
    </div>
  );
};

export default LocalStorage;
