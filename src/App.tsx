import {
  Grid,
  GridItem,
  Flex,
  Show,
  Box,
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Input,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useRef, useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformList from "./components/PlatformList";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import { BsMenuButtonWide } from "react-icons/bs";
import React from "react";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: String;
  searchText: String;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  return (
    <div className="App">
      <Grid
        gridTemplateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: `1fr`,
          lg: "300px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
          <Show below="md">
            <Button
              margin={3}
              ref={btnRef}
              onClick={onOpen}
              children={<BsMenuButtonWide />}
            />
            <Drawer
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>

                <DrawerBody>
                  <GenreList
                    selectedGenre={gameQuery.genre}
                    onSelectedGenre={(genre) =>
                      gameQuery.genre
                        ? setGameQuery({ ...gameQuery, genre: null })
                        : setGameQuery({ ...gameQuery, genre })
                    }
                  />
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Show>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectedGenre={(genre) =>
                gameQuery.genre
                  ? setGameQuery({ ...gameQuery, genre: null })
                  : setGameQuery({ ...gameQuery, genre })
              }
            />
          </GridItem>
        </Show>
        <GridItem area="main" paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformList
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
            </Box>
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </Flex>

          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
