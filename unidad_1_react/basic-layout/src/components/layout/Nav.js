import React from "react";
import '../../styles/components/layout/Nav.css'
import { NavBrand } from "./NavBrand"
import { NavItems } from "./NavItems"

const Nav = () => {
 return(
 <nav>
      <NavBrand />
      <NavItems />
 </nav>
 );
}

export { Nav };