import React, {FC, useState} from 'react';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import { IAlbum } from '../interfaces/album';
import { albumsSelector } from '../store/selectors';

const Menu: FC = () => {
  const [isSubmenuShown, setSubmenuShown] = useState<boolean>(false);
  const albums = useSelector(albumsSelector);

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
  )


  const MainMenu = () => (
      <div className="Menu">
          {albums?.map((item: IAlbum) => item.pk > 1 && (
            <Link to={`/albums/${item.pk}`}>{item.title.toUpperCase()}</Link>
          ))}
          <Link to="/texts">ТЕКСТЫ</Link>
          <Link to="/" onClick={toggleSubMenu}>ФОТОСЕРИИ</Link>
          <Link to="/noise">ШУМ</Link>
          <Link to="/about">ОБ АВТОРЕ</Link>
      </div>
  )

  return (
    <>
      {
        isSubmenuShown
        ? <SubMenu />
        : <MainMenu />
      }
    </>
  )
}

export default Menu;


