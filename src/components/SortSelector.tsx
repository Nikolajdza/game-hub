import { FC } from "react";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/all";

const sortOrders = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Date added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Release date" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Average rating" },
];

interface Props {
  sortOrder: string;
  onSelectSortOrder: (sortOrder: string) => void;
}
const SortSelector: FC<Props> = ({ sortOrder, onSelectSortOrder }) => {
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <>
      {/*{error && <></>}*/}
      {/*{!error && (*/}
      <Box>
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            Order by: {currentSortOrder?.label ?? "Relevance"}
          </MenuButton>
          <MenuList>
            {sortOrders.map((order) => (
              <MenuItem
                key={order.value}
                onClick={() => onSelectSortOrder(order.value)}
              >
                {order.label}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
      {/*  )}*/}
    </>
  );
};

export default SortSelector;
