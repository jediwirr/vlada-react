import React from 'react';
import Gallery from '../components/Gallery';
import Slider from '../components/Slider';

const Pastel = () => {
    const paths = [
        'pastel/1',
        'pastel/3-2',
        'pastel/4-1',
        'pastel/4',
        'pastel/5'
    ];

    return (
        <div className="Gallery">
            <Gallery />
            <Slider paths={paths} />
        </div>
    )
}

export default Pastel;