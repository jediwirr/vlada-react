import React, {useState, useEffect, FC} from 'react';
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import { IImage } from '../interfaces/image';

type Props = {
    images: IImage[],
    video?: boolean
}

const Slider: FC<Props> = ({images, video}) => {
    const [index, setIndex] = useState<number>(0);
    const [isNextShown, setNextShown] = useState<boolean>(true);
    const [isPrevShown, setPrevShown] = useState<boolean>(true);

    useEffect(() => {
        console.warn(images);
    }, [images]);

    useEffect(() => {
        console.log(index)
        console.log(images.length)
        if (index === 0) {
            setPrevShown(false)
        } else if (index === images.length - 1) {
            setNextShown(false)
        }
    }, [index, images.length])

    const nextSlide = () => {
        if (index < images.length - 1) {
            setIndex(index + 1)
            setPrevShown(true)
        }
    };

    const prevSlide = () => {
        if (index > 0) {
            setIndex(index - 1)
            setNextShown(true)
        }
    };
    
    return (
        <div className="Slider">
            <div className="Arrow" style={isPrevShown ? {opacity: 1} : {opacity: 0}} onClick={prevSlide}><HiChevronLeft /></div>
            {
                video ?
                <div className="Slide">
                    <iframe width="100%" height="100%" src={images[index]?.photo} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div> :
               <div className="Slide">
                    <img src={images[index]?.photo} alt="slide"></img>
                </div>
            }
            <div className="Arrow" style={isNextShown ? {opacity: 1} : {opacity: 0}} onClick={nextSlide}><HiChevronRight /></div>
        </div>
)
}

export default Slider;