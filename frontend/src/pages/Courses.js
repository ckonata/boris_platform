import React, {useEffect, useState} from "react";
import "../styles/components/pages/HomePage.css"
import { CoursesMain } from "../components/Courses/CoursesMain"
import { Hero } from "../components/HomePage/Hero"

import axios from 'axios';


const Courses = (props) => {

 const [loading, setLoading] = useState(false);
 const [courses, setCourses] = useState([]);

 useEffect(() => {
     const loadCourses = async() =>{
          setLoading(true);
          const response = await axios.get("http://localhost:4000/api/courses");
          console.log(response.data);
          setCourses(response.data);
          setLoading(false);
     };

     loadCourses();
     
 }, []);

 

 return(
      <>
       <Hero 
        title="Entrenate para ser un ejemplo a seguir"
        subtitle="Todo lo que necesitas para convertirte en un verdadero lider"
       />
       <div className="courses__main">
       {loading 
       ? (<p>Cargando...</p>)
       : ((courses.map(course => 
          (<CoursesMain key={course.id}
               name={course.name} description={course.description}
               image={course.image === null 
                    ? "https://upload.wikimedia.org/wikipedia/commons/d/da/Imagen_no_disponible.svg"
                    : course.image } 
                    imageDescription={course.imageDescription} />))))
          }
       </div>
      </>
 );
}

export { Courses };