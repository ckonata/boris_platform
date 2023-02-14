import React from "react";
import '../../styles/components/layout/Nav.css'

const NavItems = () => {
 return(
  <ul>
    <li><a href="home.html">Home</a></li>
    <li><a href="courses.html">Cursos</a></li>
    <li><a href="platform.html">Plataforma</a></li>
    <li><a href="about.html">Sobre Nosotros</a></li>
    <li><a href="contact.html">Contacto</a></li>
  </ul>
 );
}

export { NavItems };