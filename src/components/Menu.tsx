import React, {FC, useState} from 'react';
import {Link} from "react-router-dom";

const Menu: FC = () => {
  const [isSubmenuShown, setSubmenuShown] = useState<boolean>(false);

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
          <Link to="/bluelights">СИНИЙ СВЕТОФОР</Link>
          <Link to="/texts">ТЕКСТЫ</Link>
          <Link to="/portraits">АВТОПОРТРЕТЫ</Link>
          <Link to="/dostoevsky">ДОСТОЕВСКИЙ</Link>
          <Link to="/zin">ЗИН ВЛАДА</Link>
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


