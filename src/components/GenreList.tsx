import { Genre } from "./../hooks/useGenres";
import useData from "./../hooks/useData";
import {
  Button,
  Center,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import getImageCropped from "./../services/image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ selectedGenre, onSelectedGenre }: Props) {
  const { data, error, isLoading } = useData<Genre>("/genres");

  if (error) return null;
  return (
    <List>
      {isLoading && (
        <Spinner
          position={"relative"}
          left={"20%"}
          size={"lg"}
          color="red.500"
          thickness="3px"
        />
      )}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack alignItems={"center"}>
            <Image
              boxSize={"32px"}
              src={getImageCropped(genre.image_background)}
              borderRadius={8}
            />
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "light"}
              onClick={() => onSelectedGenre(genre)}
              fontSize={"lg"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
