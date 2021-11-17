import React from 'react';
import Gallery from '../components/Gallery';
import Slider from '../components/Slider';

const ZinVlada = () => {
    const paths = [
        'VLADA/0а',
        'VLADA/а',
        'VLADA/б',
        'VLADA/в',
        'VLADA/г',
        'VLADA/д',
        'VLADA/е',
        'VLADA/ж',
        'VLADA/и',
        'VLADA/к',
        'VLADA/л',
        'VLADA/м'
    ];

    return (
        <div className="Gallery">
            <Gallery />
            <Slider paths={paths} />
        </div>
    )
}

export default ZinVlada;