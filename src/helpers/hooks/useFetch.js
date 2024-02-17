import { useState, useEffect } from "react";

export const useFetch = (fetchFunc, params) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // преобразуем объект параметров в строку чтобы избежать лишних ререндеров (из за объекта  params)
  const stringParams = params ? new URLSearchParams(params).toString() : "";

  useEffect(() => {
    //самовызывающаяся функция
    (async () => {
      try {
        setLoading(true);
        const result = await fetchFunc(params);
        setData(result);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [fetchFunc, stringParams]);

  return { data, isLoading, error };
};
