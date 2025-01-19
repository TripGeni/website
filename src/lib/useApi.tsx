import { useState, useEffect } from "react";

interface UseApiOptions<B = undefined> {
  body?: B;
  params?: Record<string, string>;
  query?: Record<string, string>;
}

const useApi = <T, B = undefined>(url: string, options?: UseApiOptions<B>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryString = options?.query
          ? "?" + new URLSearchParams(options.query).toString()
          : "";
        const fullUrl = url + queryString;

        const response = await fetch(fullUrl, {
          method: options?.body ? "POST" : "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: options?.body ? JSON.stringify(options.body) : undefined,
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, loading, error };
};

export default useApi;
