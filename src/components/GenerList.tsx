import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGener, { Genres } from "../hooks/useGener";
import getCroppedImage from "../services/image-url";

interface Props {
  onSelecteGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
}

const GenerList = ({ selectedGenre, onSelecteGenre }: Props) => {
  const { data, isLoading } = useGener();
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize={"3xl"} marginY={3}>
        Genres
      </Heading>
      <List>
        {data.map((gener) => (
          <ListItem key={gener.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={"8px"}
                objectFit="cover"
                src={getCroppedImage(gener.image_background)}
              />
              <Button
                textAlign={"left"}
                whiteSpace={"normal"}
                fontWeight={selectedGenre?.id === gener.id ? "bold" : "normal"}
                fontSize="lg"
                variant={"link"}
                onClick={() => {
                  onSelecteGenre(gener);
                }}
              >
                {gener.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenerList;
