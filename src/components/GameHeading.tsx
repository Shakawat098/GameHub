import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";
interface Props {
  gameQuery: GameQuery;
}
function GameHeading({ gameQuery }: Props) {
  return (
    <Heading as={"h1"} paddingY={5}>{`${gameQuery.searchText || ""} ${
      gameQuery.platform?.name || ""
    } ${gameQuery.genre?.name || ""} Games`}</Heading>
  );
}

export default GameHeading;
