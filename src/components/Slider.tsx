import React, {useState, useEffect, FC} from 'react';
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import { IFile } from '../interfaces/file';

type Props = {
    items: IFile[];
    video?: boolean;
}

const Slider: FC<Props> = ({items, video}) => {
    const [index, setIndex] = useState<number>(0);
    const [isNextShown, setNextShown] = useState<boolean>(true);
    const [isPrevShown, setPrevShown] = useState<boolean>(true);

    useEffect(() => {
        if (index === 0) {
            setPrevShown(false)
        } else if (index === items.length - 1) {
            setNextShown(false)
        }
    }, [index, items.length])

    const nextSlide = () => {
        if (index < items.length - 1) {
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
            <div 
                className="Arrow" 
                style={isPrevShown ? {opacity: 1} : {opacity: 0}} 
                onClick={prevSlide}>
                    <HiChevronLeft />
                </div>
            <div className="Slide">
                {video ? (
                    //<iframe width="100%" height="100%" src={items[index]?.path} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <video 
                        width="100%" 
                        height="100%" 
                        loop 
                        preload='' 
                        autoPlay 
                        src={items[index]?.path}
                    >
                        Это видео не может быть воспроизведено в вашем браузере.
                    </video>
                ) : <img 
                        src={items[index]?.path} 
                        alt="slide">
                    </img>
                }
                </div>
            <div 
                className="Arrow" 
                style={isNextShown ? {opacity: 1} : {opacity: 0}} 
                onClick={nextSlide}>
                    <HiChevronRight />
                </div>
        </div>
)
}

export default Slider;
