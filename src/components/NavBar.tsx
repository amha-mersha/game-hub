import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/Artboard_4-removebg-preview.png"

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} w={"3%"} />
        <Text> NavBar</Text>

    </HStack>
)
}

export default NavBar