import { useToggle } from "../../Hooks/CustomHooks/useToggle";

const Toggle = () => {
  const { toggle, handleToggle } = useToggle()
  return (
    <div className="toggle">
      <h2 className={toggle ? "sant": "falskt"}>{toggle ? "sant" : "falskt"}</h2>
      <button onClick={handleToggle}>toggle</button>
    </div>
  );
};

export default Toggle;
