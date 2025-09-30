import React , {useState} from "react";
import {NavLink} from "react-router-dom";
import {FaUserCircle} from "react-icons/fa";

import "./NavigationBar.css";

const NavigationBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navBar">
            <div className="hamburger" onClick={toggleMenu} role="button"  aria-label="Otwórz menu">
                &#9776;
            </div>
            <NavLink to="/" end onClick={() => setMenuOpen(false)}><img alt="icon"/></NavLink>
            <div className={`navLinksContainer ${menuOpen ? "open" : ""}`}>
                <NavLink to="/sklep" end className={({ isActive }) => isActive ? "navLinks activeLink" : "navLinks"} onClick={() => setMenuOpen(false)}>Sklep</NavLink>
                <NavLink to="/kalendarzBran" end className={({ isActive }) => isActive ? "navLinks activeLink" : "navLinks"} onClick={() => setMenuOpen(false)}>Kalendarz Brań</NavLink>
                <NavLink to="/forum" end className={({ isActive }) => isActive ? "navLinks activeLink" : "navLinks"} onClick={() => setMenuOpen(false)}>Forum</NavLink>
                <NavLink to="/mapaLowisk" end className={({ isActive }) => isActive ? "navLinks activeLink" : "navLinks"} onClick={() => setMenuOpen(false)}>Mapa łowisk</NavLink>
                <NavLink to="/kontakt" end className={({ isActive }) => isActive ? "navLinks activeLink" : "navLinks"} onClick={() => setMenuOpen(false)}>Kontakt</NavLink>
            </div>

            <div className="profileMenu">
                <FaUserCircle className="profileIcon"/>
                <div className="dropdownMenu">
                    {!isLoggedIn ? (
                        <>
                            <NavLink to="/login" className="dropdownItem">Zaloguj się</NavLink>
                            <NavLink to="/register" className="dropdownItem">Zarejestruj się</NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink to="/konto" className="dropdownItem">Konto</NavLink>
                            <NavLink to="/ustawienia" className="dropdownItem">Ustawienia konta</NavLink>
                            <button className="dropdownItem" onClick={() => setIsLoggedIn(false)}>Wyloguj się</button>
                        </>
                    )}
                </div>
            </div>
        </nav>  
    );
}

export default NavigationBar;
