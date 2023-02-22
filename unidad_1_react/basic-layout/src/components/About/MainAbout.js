import React from "react";
import "../../styles/components/pages/HomePage.css"
import { AboutTitle } from "./AboutTitle";
import { HeroAbout } from "./HeroAbout";
import { MissionAbout } from "./MissionAbout";
import { Traction } from "./Traction";

const MainAbout = () =>{
 return(
  <main class="main-light">
   <AboutTitle />
   <Traction />
   <HeroAbout />
   <MissionAbout />
 </main>
 );
}

export { MainAbout };


