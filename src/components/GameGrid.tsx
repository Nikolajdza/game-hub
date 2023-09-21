import React, { FC } from 'react';
import { SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '../App';

interface Props {
    gameQuery: GameQuery;
}

const GameGrid: FC<Props> = ({gameQuery}) => {
    const {
        data,
        error,
        isLoading,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage
    } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6];

    if (error) return <Text>{error.message}</Text>;

    const fetchedGamesCount = data?.pages.reduce((total, page) =>
        total + page.results.length, 0) || 0;

    return (
        <InfiniteScroll next={() => fetchNextPage()} hasMore={!!hasNextPage} loader={<Spinner/>}
                        dataLength={fetchedGamesCount}>
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
                {data?.pages.map((page, index) => (
                    <React.Fragment key={index}>
                        {page.results.map((game) => (
                            <GameCardContainer key={game.id}>
                                <GameCard game={game}/>
                            </GameCardContainer>
                        ))}
                    </React.Fragment>
                ))}
            </SimpleGrid>
        </InfiniteScroll>
    );
};

export default GameGrid;
