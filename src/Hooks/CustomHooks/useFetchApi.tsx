import { useEffect, useState } from "react";

type ApiProps = {
  title: string;
};
const url = "https://jsonplaceholder.typicode.com/todos?_limit=5";

export const useFetchApi = () => {
  const [data, setData] = useState<ApiProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return { data };
};
