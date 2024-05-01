import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenerList from "./components/GenerList";
import { useState } from "react";
import { Genres } from "./hooks/useGener";
import PlatformSelector from "./components/PlatformSelector";
import { Platforms } from "./hooks/useGame";

const App = () => {
  const [selectedGenre, setSelectedGenres] = useState<Genres | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platforms| null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr"
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX = {5} >
          <GenerList selectedGenre = {selectedGenre} onSelecteGenre={(genre) => setSelectedGenres(genre)}/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector selectedPlatform = {selectedPlatform} onSelectePlatform = {(platform) => setSelectedPlatform(platform)}/>
        <GameGrid selectedGenre={selectedGenre} selectedPlatform = {selectedPlatform}/>
      </GridItem>
    </Grid>
  );
};

export default App;
