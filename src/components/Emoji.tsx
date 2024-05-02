import bullseye from "../assets/bulls-eye.webp";
import thumbsup from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "Meh", boxSize: "25px" },
    4: { src: thumbsup, alt: "Recommended", boxSize: "25px" },
    5: { src: bullseye, alt: "Exceptional", boxSize: "35px" },
  };

  if (rating < 3) return null;
  return <Image {...emojiMap[rating]} marginTop={1}/>;
};

export default Emoji;
