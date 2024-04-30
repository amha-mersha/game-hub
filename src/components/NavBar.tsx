import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/logo_white.png"
import ColorModeSwitch from "./ColorModeSwitch"

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} w={"3%"} />
        <ColorModeSwitch />

    </HStack>
)
}

export default NavBar