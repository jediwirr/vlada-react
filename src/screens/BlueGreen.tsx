import React, { FC } from 'react';
import Gallery from '../components/Gallery';
import Slider from '../components/Slider';
import { paths } from '../data/BlueGreen/paths';

const BlueGreen: FC = () => {

    return (
        <div className="Gallery">
            <Gallery />
            <Slider paths={paths} />
        </div>
    )
}

export default BlueGreen;