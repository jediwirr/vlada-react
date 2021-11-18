import React from 'react';
import Gallery from '../components/Gallery';
import Slider from '../components/Slider';

const Dostoevsky = () => {
    const paths = [
        '',

        '',

        '',

        '',

        '',

        '',

        '',

        '',

        '',

        '',

        '',

        ''
    ];

    return (
        <div className="Gallery">
            <Gallery />
            <Slider paths={paths} />
        </div>
    )
}

export default Dostoevsky;