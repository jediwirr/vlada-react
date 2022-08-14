import React, { useState, useEffect, FC } from 'react';
import GalleryHeader from '../components/GalleryHeader';
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import { Novel } from '../interfaces/novel';
import { API_URL } from '../services/constants';

const Texts: FC = () => {
    const [data, setData] = useState<Novel[]>([]);
    const [title, setTitle] = useState<string>('');
    const [isShown, setIsShown] = useState<boolean>(true);

    useEffect(() => {
        fetch(`${API_URL}novels/`)
        .then(response => response.json())
        .then(response => {
          console.log(response)
          setData(response)
        })
        .catch(error => console.log(error))
      }, []);

    const toggleMenu = (title) => {
        setTitle(title)
        setIsShown(!isShown)
    }

    return (
        <div className="Gallery">
            <GalleryHeader />
            <div className="Texts">
                {isShown ?
                    <div className="Texts-menu">
                        {!data ? 'Loading... ' :
                            data.map((item: Novel, i: number) => (
                                <p onClick={() => toggleMenu(item.title)}>{i + 1}. {item.title}</p>
                            ))}
                    </div> : <></>
                }
                <div className="MenuSideBar" onClick={() => setIsShown(!isShown)}>
                    {isShown ? <HiChevronLeft /> : <HiChevronRight />}
                </div>
                {isShown ?
                    <></> :
                    <div className="Texts-content">
                    {!data ? 'Loading... ' :
                        data.map((item: Novel) => (
                            <>
                                <p key={item.title} className="Title">{item.title === title ? item.title : ''}</p>
                                {item.content.split('\n').map(par => (
                                    <p>{item.title === title ? par : ''}</p>
                                ))}
                            </>
                        ))
                    }
                </div>
                }
            </div>
        </div>
    )
}

export default Texts;