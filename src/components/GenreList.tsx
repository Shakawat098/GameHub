import { Genre } from "./../hooks/useGenres";
import useData from "./../hooks/useData";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getImageCropped from "./../services/image-url";

function GenreList() {
  const { data } = useData<Genre>("/genres");
  return (
    <List>
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
