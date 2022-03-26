import React, {useState, useEffect, FC} from 'react';
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

type Props = {
    paths: string[],
    video?: boolean
}

const Slider: FC<Props> = ({paths, video}) => {
    const [index, setIndex] = useState<number>(0);
    const [isNextShown, setNextShown] = useState<boolean>(true);
    const [isPrevShown, setPrevShown] = useState<boolean>(true);

    useEffect(() => {
        console.log(index)
        console.log(paths.length)
        if (index === 0) {
            setPrevShown(false)
        } else if (index === paths.length - 1) {
            setNextShown(false)
        }
    }, [index, paths.length])

    const nextSlide = () => {
        if (index < paths.length - 1) {
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
                    <iframe width="100%" height="100%" src={paths[index]} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div> :
               <div className="Slide">
                    <img src={paths[index]} alt="slide"></img>
                </div>
            }
            <div className="Arrow" style={isNextShown ? {opacity: 1} : {opacity: 0}} onClick={nextSlide}><HiChevronRight /></div>
        </div>
)
}

export default Slider;