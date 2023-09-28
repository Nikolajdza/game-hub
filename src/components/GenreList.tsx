import { Button, Heading, HStack, Image, List, ListItem, Skeleton, Stack, } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';

const GenreList = () => {
    const {data, isLoading, error} = useGenres();
    const skeletons = Array.from({length: 18}).map((_, i) => i);
    const selectedGenreId = useGameQueryStore(state => state.gameQuery.genreId);
    const setSelectedGenreId = useGameQueryStore(state => state.setGenreId);

    return (
        <>
            <Heading fontSize="2xl" marginBottom={3}>
                Genres
            </Heading>
            <List>
                <>
                    {isLoading && (
                        <Stack>
                            {skeletons.map((skeleton) => (
                                <Skeleton key={skeleton} paddingY={2} height="30px"/>
                            ))}
                        </Stack>
                    )}
                    {!error &&
                        (data?.results.map((genre) => (
                            <ListItem key={genre.id} paddingY="5px">
                                <HStack>
                                    <Image
                                        boxSize="32px"
                                        borderRadius={8}
                                        objectFit="cover"
                                        src={getCroppedImageUrl(genre.image_background)}
                                    />
                                    <Button
                                        whiteSpace="normal"
                                        textAlign="left"
                                        onClick={() => setSelectedGenreId(genre.id)}
                                        variant="link"
                                        fontSize="lg"
                                        fontWeight={
                                            genre.id === selectedGenreId ? 'bold' : 'normal'
                                        }
                                    >
                                        {genre.name}
                                    </Button>
                                </HStack>
                            </ListItem>
                        )))}
                    {error && <></>}
                </>
            </List>
        </>
    );
};

export default GenreList;
