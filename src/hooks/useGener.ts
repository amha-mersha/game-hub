import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


interface Gener{
    id: number,
    name: string,
}

interface FetchGenersResponse{
    count: number,
    results: Gener[],
}

function useGener(){
    const [genres, setGener] = useState<Gener[]>([])
    const [error, setError] = useState("")
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const controler = new AbortController()

        setLoading(true);
        apiClient
        .get<FetchGenersResponse>("/genres", { signal: controler.signal})
        .then((res) => {
            setGener(res.data.results);
            setLoading(false)
        }).catch(err => {
            if (err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false)
        })
        return () => controler.abort();
    }, [])
    return {genres, error, isLoading}
}
export default useGener;