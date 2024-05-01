import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGener, { Genres } from "../hooks/useGener";
import getCroppedImage from "../services/image-url";

interface Props{
    onSelecteGenre: (genre: Genres) => void;
}

const GenerList = ({onSelecteGenre} : Props) => {
  const { data, isLoading } = useGener();
  if (isLoading) return <Spinner />
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
            <Button fontSize="lg" variant={"link"} onClick={() => {
                onSelecteGenre(gener)
            }}>
                {gener.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenerList;
