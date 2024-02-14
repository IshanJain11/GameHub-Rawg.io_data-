import { SimpleGrid, Text } from "@chakra-ui/react";

import useGames from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatform";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GamesGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, setData, error, setError, isLoading } = useGames(
    selectedGenre,
    selectedPlatform
  );

  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        spacing={10}
        padding={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              {" "}
              <GameCardSkeleton />{" "}
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
