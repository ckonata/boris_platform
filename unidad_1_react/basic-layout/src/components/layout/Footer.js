import React from 'react';
import '../../styles/components/layout/Footer.css'
import { IonIcon } from "@ionic/react";
import { heartOutline } from "ionicons/icons";
import { NavItems } from "./NavItems"
import { FooterSocial } from "./FooterSocial"

const Footer = () => {
 return(
    <footer>
        <div className="footer__contact">
            <h3 className="footer__form">Si queres enterarte cuando creamos nuevos cursos, suscribite a nuestro newsletter</h3>
            <div>
                <form action="POST">
                    <div className="form__item">
                        <label htmlFor="name">Nombre completo</label>
                        <input type="text" id="name" name="name" placeholder="Joe Doe" />
                    </div>
                    <div className="form__item">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="jdoe@mail.com" />
                    </div>
                    <button>Suscribirse</button>
                </form>
                <FooterSocial />
            </div>
        </div>
        <div className="footer__info">
            <img className="footer__logo" src="/images/boris-website-favicon-color.png" alt="Logo boris" />
            <NavItems />
            <small>© 2023 Boris.  Todos los derechos reservados. Hecho con <IonIcon icon={heartOutline} /> por Claudia Ziemba</small>
        </div>
    </footer>
 );
}

export { Footer };
