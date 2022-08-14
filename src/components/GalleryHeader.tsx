import React, {FC, useState} from 'react';
import Menu from './Menu';
import {Link} from "react-router-dom";

const GalleryHeader: FC = () => {
    const [menuIsShown, setMenuIsShown] = useState<boolean>(false);

    function toggleMenu(e) {
        e.preventDefault();
        setMenuIsShown(!menuIsShown);
    }
    
    return (
        <>
            <div className="Header">
                <a href="/gallery" onClick={toggleMenu}>WORKS</a>
                <span>VLADA</span>
                <Link to="/">ABOUT</Link>
            </div>

            {
                menuIsShown
                ? <Menu />
                : null
            }
        </>
    )
}

export default GalleryHeader;
