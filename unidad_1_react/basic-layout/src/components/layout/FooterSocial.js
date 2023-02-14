import React from "react";
import '../../styles/components/layout/Footer.css'
import { IonIcon } from "@ionic/react";
import { logoFacebook, logoInstagram, logoTwitter } from "ionicons/icons";

const FooterSocial = () => {
 return(
  <div>
    <p>Seguinos en nuestras redes</p>
    <a className="social__icon" href="www.facebook.com/boris"><IonIcon icon={logoFacebook} /></a>
    <a className="social__icon" href="www.twitter.com/boris"><IonIcon icon={logoTwitter} /></a>
    <a className="social__icon" href="www.instagra.com/boris"><IonIcon icon={logoInstagram} /></a>
  </div>
 );
}

export { FooterSocial };