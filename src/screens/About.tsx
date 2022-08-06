import React, { FC } from 'react';
import Gallery from '../components/Gallery';
import Slider from '../components/Slider';

const About: FC = () => {
    const paths: string[] = [
        "https://www.youtube.com/embed/XHT1Y0b64gc"
    ];

    return (
        <div className="Gallery">
            <Gallery />
            {/*<Slider images={images} video={true} />*/}
        </div>
    )
}

export default About;