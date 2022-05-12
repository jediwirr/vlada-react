import React, { FC } from 'react';
import Gallery from '../components/Gallery';
import Slider from '../components/Slider';
import { paths } from '../data/BlueLights/paths';

const BlueLights: FC = () => {

    return (
        <div className="Gallery">
            <Gallery />
            <Slider paths={paths} />
        </div>
    )
}

export default BlueLights;
