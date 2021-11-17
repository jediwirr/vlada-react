import React, {useState} from 'react';
import Menu from '../components/Menu';
import {Link} from "react-router-dom";

const Gallery = () => {
    const [menuIsShown, setMenuIsShown] = useState(false);

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
                : ''
            }
        </>
    )
}

export default Gallery;