import { useState, useEffect } from "react";

interface FetchFunction<P, T> {
  (params?: P): Promise<T>;
}

interface UseFetchResult<T> {
  data?: T | null;
  isLoading: boolean;
  error: Error | null;
}

export const useFetch = <T, P>(
  fetchFunc: FetchFunction<P, T>,
  params?: P
): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // преобразуем объект параметров в строку чтобы избежать лишних ререндеров (из за объекта  params)
  const stringParams = params ? new URLSearchParams(params).toString() : "";

  useEffect(() => {
    //самовызывающаяся функция
    (async () => {
      try {
        setLoading(true);
        const result = await fetchFunc(params);
        setData(result);
      } catch (error) {
        //уточнение
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    })();
  }, [fetchFunc, stringParams]);

  return { data, isLoading, error };
};
