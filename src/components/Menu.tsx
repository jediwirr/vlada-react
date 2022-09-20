import React, {FC, useState} from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

import { IAlbum } from '../interfaces/album';
import { albumsSelector, videoAlbumsSelector } from '../store/selectors';

const Menu: FC = () => {
  const [isSubmenuShown, setSubmenuShown] = useState<boolean>(false);
  const imageAlbums: IAlbum[] = useSelector(albumsSelector);
  const videoAlbums: IAlbum[] = useSelector(videoAlbumsSelector);

  function toggleSubMenu(e) {
    e.preventDefault();
    setSubmenuShown(!isSubmenuShown);
  }

  const SubMenu = () => (
    <div className="Menu">
      <Link to="/bluegreen">ГОЛУБО-ЗЕЛЁНЫЙ</Link>
      <Link to="/country">ДАЧА</Link>
      <Link to="/pastel">ПАСТЕЛЬ</Link>
      <Link to="/pasteltwo">ПАСТЕЛЬ 2</Link>
      <Link to="/" onClick={toggleSubMenu}>НАЗАД</Link>
    </div>
  );


  const MainMenu = () => (
    <div className="Menu">
      {imageAlbums?.map((item: IAlbum) => item.pk > 1 && (
        <Link to={`/albums/${item.pk}`}>
          {item.title.toUpperCase()}
        </Link>
      ))}
      <Link to="/texts">ТЕКСТЫ</Link>
      {videoAlbums?.map((item: IAlbum) => (
        <Link to={`/videoalbums/${item.pk}`}>
          {item.title.toUpperCase()}
        </Link>
      ))}
      {/*<Link to="/" onClick={toggleSubMenu}>ФОТОСЕРИИ</Link>*/}
    </div>
  );

  return (
    <>
      {
        isSubmenuShown
          ? <SubMenu />
          : <MainMenu />
      }
    </>
  );
};

export default Menu;


