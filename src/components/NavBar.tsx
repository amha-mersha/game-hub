import { Card, HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import darkModeLogo from "../assets/Asset-2.webp";
import SearchBar from "./SearchBar";
import { useState } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const [currentLogo, setCurrentLogo] = useState(darkModeLogo);
  return (
    <HStack padding={4} alignItems="center" spacing={4}>
      <Card padding={2} direction="row" variant={"filled"}>
        <Image src={currentLogo} boxSize={"50px"} />
        <Text
          fontSize={"3xl"}
          fontWeight={"bold"}
          whiteSpace={"nowrap"}
          width={"100%"}
          marginX={2}
        >
          Fire Games
        </Text>
      </Card>
      <SearchBar onSearch={onSearch} />
      <ColorModeSwitch onSelected={setCurrentLogo} />
    </HStack>
  );
};

export default NavBar;
