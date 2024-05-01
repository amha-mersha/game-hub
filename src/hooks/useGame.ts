import { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

export interface Game {
  id: number;
  name: string;
  background_image: string
  parent_platforms: {platform: Platforms}[]
  metacritic: number, 
}

export interface Platforms{
  id: number,
  name: string, 
  slug: string,
}

export interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGame = () => {
    const [games, setGame] = useState<Game[]>();
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    

    
    useEffect(() => {
        const controler = new AbortController();

      setLoading(true)
      apiClient
        .get<FetchGamesResponse>("/games", { signal: controler.signal})
        .then((res) => {
          setGame(res.data.results);
          setLoading(false)
        })
        .catch((err) => {
            if (err instanceof CanceledError) return 
            setError(err.message)
            setLoading(false)
        })
        return () => controler.abort();
    }, [])
    return {games, error, isLoading}
}

export default useGame