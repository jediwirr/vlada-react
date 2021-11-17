import React from 'react';
import Gallery from '../components/Gallery';
import Slider from '../components/Slider';

const BlueGreen = () => {
    const paths = [
        'bluegreen/1',
        'bluegreen/2',
        'bluegreen/3',
        'bluegreen/4',
        'bluegreen/5',
        'bluegreen/6',
        'bluegreen/7'
    ];

    return (
        <div className="Gallery">
            <Gallery />
            <Slider paths={paths} />
        </div>
    )
}

export default BlueGreen;