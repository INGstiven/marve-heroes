import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import { CarouselConfig } from "../../types/carousel/carouselConfig";
import "./carousel.scss"
const images: ReactImageGalleryItem[] = [
  {
    original: "./assets/images/heroes1.jpg",
    originalHeight: 700,
  },
  {
    original: "./assets/images/heroes2.jpg",
    originalHeight: 700,
  },
  {
    original: "./assets/images/heroes3.jpeg",
    originalHeight: 700,
  },
];

export const CarouselComponent : React.FunctionComponent<CarouselConfig> = ({
    AutoPlay = false,
    Infinite = false,
    ShowNav = true,
    ShowThumbnails = false,
    ShowFullscreenButton = false,
    ShowPlayButton = false
}) => {
  return (
         <ImageGallery  items={images} 
         autoPlay= {AutoPlay} 
         infinite={Infinite} 
         showNav={ShowNav} 
         showThumbnails={ShowThumbnails} 
         showFullscreenButton={ShowFullscreenButton} 
         showPlayButton={ShowPlayButton}/>
  )
}