import React from "react";
import CompanyMap from "../components/CompanyMap";
import './Contact.css';

const Contact = () =>
{

return(
    <>
    <div className="contactConteiner">
        <h2>Kontakt z nami</h2>
        <CompanyMap/>
        <div className="contactFormConteiner">
            <form className="ContactForm">
                <h3>Napisz do nas</h3>
                 <label>
                    Imię i Nazwisko<span className="requireField">*</span><br/>
                    <input type="text" className="contactInputs" placeholder="Wpisz swoje dane" required/><br/>
                </label>
                <label>
                    E-mail:<span className="requireField">*</span><br/>
                    <input type="email" className="contactInputs"  placeholder="kontakt@example.com" required/><br/>
                </label>
                <label>
                    Numer Telefonu<span className="requireField">*</span><br/>
                    <input type="tel"  className="contactInputs" placeholder="Podaj swój numer telefonu" required/><br/>
                </label>
                <label>
                    Temat<span className="requireField">*</span><br/>
                    <input type="text" className="contactInputs" placeholder="Podaj temat wiadomości" required/><br/>
                </label>
                <label>
                    Wiadomości<span className="requireField">*</span><br/>
                    <textarea id = "contactTextArea" placeholder="Treść wiadomości..."/><br/>
                </label>
                
            </form>
                <div className="contactDataConteiner">
                    <div>
                        <h3>Numer Telefonu</h3>
                        <a className="ContactDataLinks" href="tel:+48111111111">Sklep stacjonarny: +48 111 111 111</a>
                    </div>
                    <div>
                        <h3>Adres E-mail</h3>
                        <a className="ContactDataLinks" href="mailto:kontakt@example.com">Sklep stacjonarny: kontakt@example.com</a>
                    </div>
                </div>

        </div>

    </div>
    </>
)
}

export default Contact;