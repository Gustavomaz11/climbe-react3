import { useState, useCallback } from "react";
import { API_BASE_URL } from "../shared/config/env";

export function useFetch(baseUrl = API_BASE_URL) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const request = useCallback(
    async (endpoint, options = {}) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`${baseUrl}${endpoint}`, {
          method: options.method || "GET",
          headers: {
            "Content-Type": "application/json",
            ...options.headers,
          },
          body: options.body ? JSON.stringify(options.body) : null,
        });

        if (!response.ok) {
          throw new Error(`Erro: ${response.status}`);
        }

        const json = await response.json();
        setData(json);
        return json;
      } catch (e) {
        setError(e.message || "Erro inesperado");
        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    [baseUrl]
  );

  return {
    data,
    error,
    isLoading,
    request,
  };
}
