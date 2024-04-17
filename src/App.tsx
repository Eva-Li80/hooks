import Counter from "./Components/Counter/Counter";
import GetApi from "./Components/Api/GetApi";
import GetTodoApi from "./Components/Api/GetTodoApi";
import ClickCounter from "./Components/ClickCounter/ClickCounter";
import ArrayComponent from "./Components/Array/ArrayComponent";
import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import Toggle from "./Components/Toggle/Toggle";
import "./Styles/main.scss";
import LocalStorage from "./Components/Localstorage/LocalStorage";

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Card title="Array component" subtitle="med useArray">
          <ArrayComponent />
        </Card>
        <div className="app-counter">
          <Card title="Counter" subtitle="useCounter max 10">
            <Counter start={0} min={0} max={10} step={1} />
          </Card>
          <Card title="Counter" subtitle="useCounter max 20">
            <Counter start={0} min={0} max={20} step={5} />
          </Card>
          <Card title="Counter" subtitle="useCounter max 30">
            <Counter start={0} min={0} max={30} step={12} />
          </Card>
        </div>
        <Card title="ClickCounter" subtitle="useClickCounter">
          <ClickCounter
            buttonTextRemove="Minska antalet"
            buttonTextAdd="Öka antalet"
          />
        </Card>
        <Card title="Toggle" subtitle="useToggle">
          <Toggle />
        </Card>
        <Card title="Fetch api" subtitle="useFetch ">
          <GetApi />
        </Card>
        <Card title="Fetch specific api" subtitle="useFetchApi">
          <GetTodoApi />
        </Card>
        <Card title="LocalStorage" subtitle="useLocakStorage">
          <LocalStorage />
        </Card>
      </div>
    </>
  );
}

export default App;
