import React from "react";
import { IonIcon } from "@ionic/react";
import { logoFacebook, logoInstagram, logoTwitter } from "ionicons/icons";

const FooterSocial = () => {
 return(
  <div>
    <p className="social__title">Seguinos en nuestras redes</p>
    <a className="social__icon" href="https://www.facebook.com/boris"><IonIcon icon={logoFacebook} /></a>
    <a className="social__icon" href="https://www.twitter.com/boris"><IonIcon icon={logoTwitter} /></a>
    <a className="social__icon" href="https://www.instagra.com/boris"><IonIcon icon={logoInstagram} /></a>
  </div>
 );
}

export { FooterSocial };