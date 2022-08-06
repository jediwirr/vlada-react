import React, { FC, useEffect, useState } from 'react';
import AboutMain from '../components/AboutMain';
import Menu from '../components/Menu';
import { API_URL } from '../services/constants';
import { IImage } from '../interfaces/image';

const Home: FC = () => {
    const [images, setImages] = useState<IImage[]>([]);

    const getImages = async () => {
        const album = await (await fetch(`${API_URL}albums/1`)).json();
        setImages(album.images);
    };

    useEffect(() => {
        getImages();
    }, []);

  return (
    <div className="Home">
        <div className="Photo-main">
        <img src={images[0]?.photo} alt="VLADA"/>
        </div>
        <Menu />
        <AboutMain imagePath={images[1]?.photo} />
    </div>
  );
}

export default Home;