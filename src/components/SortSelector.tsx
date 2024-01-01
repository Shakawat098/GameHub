import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import React from "react";
import { BsChevronBarDown } from "react-icons/bs";
interface Props {
  onSelectOrder: (order: string) => void;
  sortOrder: String;
}
function SortSelector({ onSelectOrder, sortOrder }: Props) {
  const SortedData = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "released", label: "Released" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  const currentSortData = SortedData.find((data) => data.value === sortOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Order By {currentSortData?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {SortedData.map((data) => (
          <MenuItem
            onClick={() => {
              onSelectOrder(data.value);
            }}
            key={data.value}
            value={data.value}
          >
            {data.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
