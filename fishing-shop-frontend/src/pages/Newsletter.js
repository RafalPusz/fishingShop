import React from "react";
import "./Newsletter.css";

const Newsletter = () => 
{
    return(
        <div id = "newsLetterConteiner">
            <span id = "newsletterJoinMessage">Zapisz sie do newslettera</span>
            <span id = "newsletterRabatMessage">I odbierz 25% zniżki na kolejne zakupy</span>

            <form id = "newsletterForm">
                <label className="newsletterInputLabel" htmlFor="newsletterEmailInput">e-mail<span className="requireField">*</span></label><br/>
                    <input  id = "newsletterEmailInput" className="newsletterFormInput" type="email" placeholder="examle@example.com" required/>
                
                
                <button id = "newsletterFormButton">Zapisz się</button>
            </form>
        </div>
    );
}
export default Newsletter;