import React from "react";
import { CoursesOverview } from "./CoursesOverview";
import "../../styles/components/pages/HomePage.css"

const Main = () =>{
 return(
  <main>
   <div class="main__title">
       <h3>Todo lo que necesitas para comenzar a liderar equipos de trabajo</h3>
       <p>Con la infraestructura de una plataforma que te permite ejercitar habilidades duras como blandas.</p>
   </div>
   <CoursesOverview />
 </main>
 );
}

export { Main };
