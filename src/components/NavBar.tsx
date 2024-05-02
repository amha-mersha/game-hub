import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/logo_white.png"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchBar from "./SearchBar"

interface Props{
  onSearch: (searchText: string) => void
}

const NavBar = ({onSearch}: Props) => {
  return (
    <HStack padding={"10px"}>
        <Image src={logo} boxSize={"50px"}/>
        <SearchBar onSearch={onSearch}/>
        <ColorModeSwitch />

    </HStack>
)
}

export default NavBar