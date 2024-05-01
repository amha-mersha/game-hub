import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGener from "../hooks/useGener";
import getCroppedImage from "../services/image-url";

const GenerList = () => {
  const { data } = useGener();
  return (
    <List>
      {data.map((gener) => (
        <ListItem key={gener.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={"8px"}
              src={getCroppedImage(gener.image_background)}
            />
            <Text fontSize="lg">
                {gener.name}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenerList;
