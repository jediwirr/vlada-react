import React, {useState, useEffect} from 'react';

const Slider = ({paths, video}) => {
    const [index, setIndex] = useState(0);
    const [isNextShown, setNextShown] = useState(true);
    const [isPrevShown, setPrevShown] = useState(true);

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
            <div className="Arrow" style={isPrevShown ? {opacity: 1} : {opacity: 0}} onClick={prevSlide}>BACK</div>
            {
                video ?
                <div className="Slide">
                    <iframe width="100%" height="100%" src={paths[index]} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div> :
               <div className="Slide">
                    <img src={`./images/${paths[index]}.jpg`} alt="slide"></img>
                </div>
            }
            <div className="Arrow" style={isNextShown ? {opacity: 1} : {opacity: 0}} onClick={nextSlide}>FORWARD</div>
        </div>
)
}

export default Slider;