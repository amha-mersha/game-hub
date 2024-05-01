import useData from './useData';
import { Genres } from './useGener';

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

const useGame = (selectedGenre: Genres| null) => useData<Game>("/games", {params: {genres:  selectedGenre?.id}}, [selectedGenre?.id])

export default useGame