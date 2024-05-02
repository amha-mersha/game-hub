import { GameQuery } from '../App';
import useData from './useData';

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

const useGame = (gameQuery: GameQuery) => useData<Game>("/games", {params: {genres:  gameQuery.genre?.id, platforms: gameQuery.platform?.id, ordering: gameQuery.sortOrder, search: gameQuery.searchText}}, [gameQuery])

export default useGame