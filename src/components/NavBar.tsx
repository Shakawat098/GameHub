import React from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/Logo/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props {
  onSearch: (searchData: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent={"space-between"} padding={5}>
      <Image src={logo} boxSize="60px" objectFit={"cover"} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
