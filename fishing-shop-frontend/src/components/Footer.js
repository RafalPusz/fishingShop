import React, {useState} from "react";
import { FaEnvelope, FaPhone,FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import {NavLink} from "react-router-dom";
import "./Footer.css"

const Footer = () => 
{
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        <footer>
        
            <div className="footerInfo">
                <div className="footerContainer"> 
                    <img alt = "ikona"></img><br/>
                    <label>
                        <FaEnvelope className="footerIcon"/>
                        E-mail:
                        <a href="mailto:kontakt@explane.com" className="footerLinks">kontakt@example.com</a>
                    </label><br/>
                    <label>
                        <FaPhone className="footerIcon"/>
                        Kontakt:
                        <a href="tel:+48111111111" className="footerLinks">+48 111 111 111</a>
                    </label><br/>
                    <a href="http://localhost:3000/kontakt" target="_blank" rel="noreferrer" className="footerSocialMedia"><FaFacebook /></a>
                    <a href="http://localhost:3000/kontakt" target="_blank" rel="noreferrer" className="footerSocialMedia"><FaInstagram/></a>
                    <a href="http://localhost:3000/kontakt" target="_blank" rel="noreferrer" className="footerSocialMedia"><FaYoutube/></a> 
                </div>
                <div className="footerContainer">
                    <h3>Konto</h3>
                    {!isLoggedIn ? (
                            <>
                                <NavLink to="/login" className="footerLinks">Zaloguj się</NavLink><br/>
                                <NavLink to="/register" className="footerLinks">Zarejestruj się</NavLink><br/>
                            </>
                        ):(
                            <>
                                <NavLink to="/konto" className="footerLinks">Konto</NavLink><br/>
                                <NavLink to="/ustawienia" className="footerLinks">Ustawienia konta</NavLink><br/>
                                <button onClick={() => setIsLoggedIn(false)}>Wyloguj się</button><br/>
                            </>
                        )
                        }
                </div>
                <div className="footerContainer">
                    <h3>Informacje</h3>
                    <NavLink to="/kontakt" className="footerLinks">Kontakt</NavLink><br/>
                    <NavLink to="/regulamin" className="footerLinks">Regulamin</NavLink><br/>
                    <NavLink to="/KosztyWysylki" className="footerLinks">Koszty i czas wysyłki</NavLink><br/>
                    <NavLink to="/newsletter" className="footerLinks">Newsletter</NavLink><br/>
                    <NavLink to="/regulamin" className="footerLinks">Polityka prywatności</NavLink><br/>
                </div>
                <div className="footerContainer">
                    <h3>Moje zamówienia</h3>
                    <NavLink to="/kontakt" className="footerLinks">Status zamówienia</NavLink><br/>
                    <NavLink to="/regulamin" className="footerLinks">Śledź przesyłkę</NavLink><br/>
                    <NavLink to="/regulamin" className="footerLinks">Reklamacje</NavLink><br/>
                    <NavLink to="/regulamin" className="footerLinks">Zwroty</NavLink><br/>
                </div>

            </div>
            <div className="copyright">
                © 2025 Sklep Wędkarski – Wszystkie prawa zastrzeżone
            </div>
        </footer>
    );
};

export default Footer;