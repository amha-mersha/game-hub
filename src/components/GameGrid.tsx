import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame, { Platforms } from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genres } from "../hooks/useGener";

interface Props{
  selectedGenre: Genres|null
  selectedPlatform: Platforms| null
}

const GameGrid = ({selectedGenre,selectedPlatform}: Props) => {
  const { data, error, isLoading } = useGame(selectedGenre, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 2,
          xl: 4,
        }}
        spacing={5}
        padding={"10px"}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton  />
            </GameCardContainer>
          ))}
        {data?.map((game) => (
          <GameCardContainer key={game.id} >
            <GameCard  game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
