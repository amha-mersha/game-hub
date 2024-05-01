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

const useGame = () => useData<Game>("/games")

export default useGame