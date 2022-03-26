import React, { FC } from 'react';
import Gallery from '../components/Gallery';
import Slider from '../components/Slider';

const Portraits: FC = () => {
    const paths: string[] = [
        "https://www.youtube.com/embed/GQ12_rdx3vU",
        "https://www.youtube.com/embed/6JYiXI29syA",
        "https://www.youtube.com/embed/kC5e4bbPg7w",
        "https://www.youtube.com/embed/KAnD4BKUH6E",
        "https://www.youtube.com/embed/Vv_SAs4BGx0"
    ];

    return (
        <div className="Gallery">
            <Gallery />
            <Slider paths={paths} video={true} />
        </div>
    )
}

export default Portraits;