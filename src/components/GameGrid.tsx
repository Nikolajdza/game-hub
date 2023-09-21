import { FC } from 'react';
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames, { Game, Platform } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';
import { GameQuery } from '../App';

interface Props {
    gameQuery: GameQuery;
}

const GameGrid: FC<Props> = ({gameQuery}) => {
    const {data, error, isLoading} = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <>
            {error && <Text>{error.message}</Text>}
            {!error && (
                <SimpleGrid
                    columns={{sm: 1, md: 2, lg: 3, xl: 4}}
                    spacing={6}
                    padding={10}
                    paddingLeft={0}
                >
                    {isLoading &&
                        skeletons.map((skeleton) => (
                            <GameCardContainer key={skeleton}>
                                <GameCardSkeleton/>
                            </GameCardContainer>
                        ))}
                    {data?.results.map((game) => (
                        <GameCardContainer key={game.id}>
                            <GameCard game={game}/>
                        </GameCardContainer>
                    ))}
                </SimpleGrid>
            )}
        </>
    );
};

export default GameGrid;
