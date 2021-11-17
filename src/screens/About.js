import React from 'react';
import Gallery from '../components/Gallery';
import Slider from '../components/Slider';

const About = () => {
    const paths = [
        "https://www.youtube.com/embed/XHT1Y0b64gc"
    ];

    return (
        <div className="Gallery">
            <Gallery />
            <Slider paths={paths} video={true} />
        </div>
    )
}

export default About;