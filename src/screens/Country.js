import React from 'react';
import Gallery from '../components/Gallery';
import Slider from '../components/Slider';

const Country = () => {
    const paths = [
        'country/1',
        'country/2',
        'country/3',
        'country/4',
        'country/5',
        'country/6'
    ];

    return (
        <div className="Gallery">
            <Gallery />
            <Slider paths={paths} />
        </div>
    )
}

export default Country;