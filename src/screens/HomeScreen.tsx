import React, { FC, useEffect, useState } from 'react';
import AboutMain from '../components/AboutMain';
import Menu from '../components/Menu';
import { IFile } from '../interfaces/file';
import { API_URL } from '../services/constants';

const Home: FC = () => {
    const [images, setImages] = useState<IFile[]>([]);

    const getImages = async () => {
        const album = await (await fetch(`${API_URL}albums/1`)).json();
        setImages(album.files);
    };

    useEffect(() => {
        getImages();
    }, []);

  return (
    <div className="Home">
        <div className="Photo-main">
        <img src={images[0]?.path} alt="VLADA"/>
        </div>
        <Menu />
        <AboutMain imagePath={images[1]?.path} />
    </div>
  );
}

export default Home;