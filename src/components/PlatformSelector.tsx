import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import {  BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platforms } from "../hooks/useGame";

interface Props{
    onSelectePlatform: (platform: Platforms) => void,
    selectedPlatform: Platforms| null,
}

const PlatformSelector = ({onSelectePlatform, selectedPlatform}: Props) => {
    const {data, error} = usePlatforms();
    if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name|| "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => <MenuItem onClick={() => onSelectePlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
