
import placeholderImage from "../assets/No-Image-Placeholder.svg.png";

const getCroppedImage = (url: string) => {
    if (!url) return placeholderImage
    const index = url.indexOf("media/") +"media/".length
    return url.slice(0,index) + "crop/600/400/" + url.slice(index)
}

export default getCroppedImage