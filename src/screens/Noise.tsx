import React, { FC } from 'react';
import Gallery from '../components/Gallery';
import Slider from '../components/Slider';

const Noise: FC = () => {
    const paths: string[] = [
        "https://www.youtube.com/embed/W3Fty5A5I6o"
    ];

    return (
        <div className="Gallery">
            <Gallery />
            <Slider paths={paths} video={true} />
        </div>
    )
}

export default Noise;