import { FC } from "react";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList: FC<Props> = ({ onSelectGenre }) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = Array.from({ length: 18 }).map((_, i) => i);

  return (
    <List>
      {isLoading && (
        <Stack>
          {skeletons.map((skeleton) => (
            <Skeleton key={skeleton} paddingY={2} height="30px" />
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
              <Button
                onClick={() => onSelectGenre(genre)}
                variant="link"
                fontSize="lg"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      {error && <></>}
    </List>
  );
};

export default GenreList;
