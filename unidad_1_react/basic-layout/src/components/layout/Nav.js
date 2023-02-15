import React from "react";
import '../../styles/components/layout/Nav.css'
import { NavBrand } from "./NavBrand"
import { Link } from 'react-router-dom'

const Nav = () => {
 return(
 <nav>
      <NavBrand />
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Cursos</Link></li>
          <li><Link to="/platform">Plataforma</Link></li>
          <li><Link to="/about">Sobre Nosotros</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
      </ul>
 </nav>
 );
}

export { Nav };