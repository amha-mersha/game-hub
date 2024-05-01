import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  return (
    <>
      <Badge fontSize={"16px"} paddingX={3} borderRadius={"4px"} colorScheme={score > 75? "green": score > 60? "yellow" : ""}>{score}</Badge>
    </>
  );
};

export default CriticScore;
