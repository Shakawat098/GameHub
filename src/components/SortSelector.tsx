import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import React from "react";
import { BsChevronBarDown } from "react-icons/bs";

function SortSelector() {
  const SortedData = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}></MenuButton>
      <MenuList>
        {SortedData.map((data) => (
          <MenuItem key={data.value} value={data.value}>
            {data.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
