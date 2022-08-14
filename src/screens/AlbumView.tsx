import React, { FC } from 'react';
import GalleryHeader from '../components/GalleryHeader';
import Slider from '../components/Slider';
import { IAlbum } from '../interfaces/album';

type Props = {
    album: IAlbum;
    video?: boolean;
};

const AlbumView: FC<Props> = ({ album, video }) => {
    return (
        <div className="Gallery">
            <GalleryHeader />
            <Slider items={album?.files} video={video} />
        </div>
    );
};

export default AlbumView;
