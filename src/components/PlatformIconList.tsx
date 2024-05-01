import {
  FaWindows,
  FaLinux,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platforms } from "../hooks/useGame";
import { IconType } from "react-icons";
import { HStack, Icon } from "@chakra-ui/react";

interface Props {
  platforms: Platforms[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    ios: MdPhoneIphone,
    android: FaAndroid,
    mac: FaApple,
    pc: FaWindows,
    playstation: FaPlaystation,
    nintendo: SiNintendo,
    xbox: FaXbox,
    linux: FaLinux,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform ) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.400" />
    ))}
    </HStack>
  );
};

export default PlatformIconList;
