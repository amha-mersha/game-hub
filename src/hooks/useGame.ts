import { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

const useGame = () => {
    const [games, setGame] = useState<Game[]>();
    const [error, setError] = useState("");
    
    interface Game {
      id: number;
      name: string;
    }
    
    interface FetchGamesResponse {
      count: number;
      results: Game[];
    }
    
    useEffect(() => {
        const controler = new AbortController();

      apiClient
        .get<FetchGamesResponse>("/games", { signal: controler.signal})
        .then((res) => {
          setGame(res.data.results);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return 
            setError(err.message)
        })
        return () => controler.abort();
    }, [])
    return {games, error}
}

export default useGame