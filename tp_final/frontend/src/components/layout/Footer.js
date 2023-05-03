import React from 'react';
import '../../styles/components/layout/Footer.css'
import { IonIcon } from "@ionic/react";
import { heartOutline } from "ionicons/icons";
import { Link } from 'react-router-dom'
import { FooterSocial } from "./FooterSocial"

const Footer = () => {
 return(
    <footer>
        <div className="footer__contact mb-5">
            <h3 className="footer__form">Si queres enterarte cuando creamos nuevos cursos, suscribite a nuestro newsletter</h3>
            <FooterSocial />
        </div>
       
        <div className="footer__info">
            <img className="footer__logo" src="/images/boris-website-favicon-color.png" alt="Logo boris" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/courses">Cursos</Link></li>
                <li><Link to="/platform">Plataforma</Link></li>
                <li><Link to="/about">Sobre Nosotros</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
            </ul>
            <small>© 2023 Boris.  Todos los derechos reservados. Hecho con <IonIcon icon={heartOutline} /> por Claudia Ziemba</small>
        </div>
    </footer>
 );
}

export { Footer };
