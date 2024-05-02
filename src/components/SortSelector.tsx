import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

 interface Props{
    onSelectSortOrder: (sortOrder: string) => void
    selectedOrder: string,
}

const SortSelector = ({onSelectSortOrder, selectedOrder}: Props) => {
  const sortOrder = [
    { value: "", lable: "Relevance" },
    { value: "-added", lable: "Date Added" },
    { value: "name", lable: "Name" },
    { value: "-released", lable: "Release Date" },
    { value: "-metacritic", lable: "Popularity" },
    { value: "-rating", lable: "Average Rating" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {sortOrder.find(order => order.value === selectedOrder)?.lable || "Relevalnce"}
      </MenuButton>
      <MenuList>
        {sortOrder.map((order) => (
          <MenuItem onClick={()=> onSelectSortOrder(order.value )} key={order.value} value={order.value}>
            {order.lable}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
