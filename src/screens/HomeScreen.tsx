import React, { FC, useEffect, useState } from 'react';
import AboutMain from '../components/AboutMain';
import Menu from '../components/Menu';
import { API_URL } from '../constants';
import { IImage } from '../interfaces/image';

const Home: FC = () => {
    const [mainImage, setMainImage] = useState<string>('');

    const getImages = async () => {
        const images = await (await fetch(`${API_URL}images`)).json();
        const requiredImage = images.find((item: IImage) => item.category === 'main');
        setMainImage(requiredImage.photo);
    };

    useEffect(() => {
        getImages();
    }, []);

    // https://lh3.googleusercontent.com/pw/AM-JKLVfI9sqdBqabNU9rKIrKS0KjUI7d--pKO4-FR_LPtYSCEcxyGsbzIOrDslOC5MHoufmW_aRcxKrmwtlhoMWgnMdaBXk5vY_WoYXJ_9qUchAUhJMJgZtoR-lA7OFg1y-YkAcwvbW-Cg-t35WrNEXJGQO=w1000-h665-no?authuser=0

  return (
    <div className="Home">
        <div className="Photo-main">
        <img src={mainImage} alt="VLADA"/>
        </div>
        <Menu />
        <AboutMain />
    </div>
  );
}

export default Home;