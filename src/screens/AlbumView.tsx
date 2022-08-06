import React, { FC } from 'react';
import Gallery from '../components/Gallery';
import Slider from '../components/Slider';
import { IAlbum } from '../interfaces/album';

type Props = {
    album: IAlbum;
};

const AlbumView: FC<Props> = ({ album }) => {
    return (
        <div className="Gallery">
            <Gallery />
            <Slider images={album?.images} />
        </div>
    );
};

export default AlbumView;
