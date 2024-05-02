import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import darkModeLogo from "../assets/Asset-2.webp";
import lightModeLogo from "../assets/Asset-3.webp"

interface Props {
  onSelected: (colorMode: string) => void;
}

const ColorModeSwitch = ({ onSelected }: Props) => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        padding={"10px"}
        isChecked={colorMode === "dark"}
        onChange={() => {
          toggleColorMode();
          onSelected(colorMode === "dark"? darkModeLogo: lightModeLogo);
        }}
      />
      <Text whiteSpace="nowrap">ColorMode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
