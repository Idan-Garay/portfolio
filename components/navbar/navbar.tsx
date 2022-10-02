import { GiHamburgerMenu } from 'react-icons/Gi';
import navStyles from "./Navbar.module.css";
import { FaTimes } from 'react-icons/Fa';
import { useState } from 'react';

export default function Navbar() {
    const [toggleNav, setToggleNav] = useState(true);
    const changeToggle = () => { setToggleNav(!toggleNav) };

    return <>
        {toggleNav ?
            <nav className={navStyles.nav}>
                <FaTimes className={navStyles.icon} size={30} onClick={changeToggle} />
                <ul >
                    <li><a href="#"><h1>Profession</h1></a></li>
                    <li><a href="#"></a><h1>Myself</h1></li>
                    <li><a href="#"></a><h1>My Projects</h1></li>
                    <li><a href="#"></a><h1>Connect with Me</h1></li>
                </ul>
            </nav>
            : <nav className={navStyles.navMinimize}>
                <GiHamburgerMenu className={navStyles.icon} size={30} onClick={changeToggle} />
            </nav>
        }
    </>
}