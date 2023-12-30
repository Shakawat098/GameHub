import { Genre } from "./../hooks/useGenres";
import useData from "./../hooks/useData";
import {
  Center,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import getImageCropped from "./../services/image-url";

function GenreList() {
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
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
