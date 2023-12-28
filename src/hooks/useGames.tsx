import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
interface Game {
  id: string;
  name: string;
}
interface FetchGameResponses {
  count: number;
  results: Game[];
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGameResponses>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);
  return { error, games };
};
export default useGames;
