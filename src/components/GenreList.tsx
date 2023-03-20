import useGenres from "../hooks/useGenres";
import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const skeletons = Array.from({ length: 18 });

  return (
    <List>
      {isLoading && (
        <Stack>
          {skeletons.map((_) => (
            <Skeleton paddingY={2} height="30px" />
          ))}
        </Stack>
      )}
      {!error &&
        data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      {error && <></>}
    </List>
  );
};

export default GenreList;
