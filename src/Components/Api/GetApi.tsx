import { useFetch } from "../../Hooks/CustomHooks/useFetch";
import "./api.scss";

const apiUrl = "https://jsonplaceholder.typicode.com/todos?_limit=5";

const GetApi = () => {
  const { data } = useFetch(apiUrl);

  return (
    <div className="api">
      {data.length > 0 ? (
        <ul className="ul">
          {data.map((d) => (
            <li key={d.id}>
              <h4>{d.title}</h4>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GetApi;
