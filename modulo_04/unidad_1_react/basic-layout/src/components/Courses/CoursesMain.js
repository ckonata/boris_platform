import React from "react";
import { CourseBox } from "./CourseBox";
import "../../styles/components/pages/HomePage.css"

const CoursesMain = () =>{
  const fullCourses = [
    {
      "id": 1,
      "title": "Liderazgo de equipos remotos",
      "info": "El curso está diseñado para aquellas personas encargadas de facilitar el proceso de trabajo de un equipo, pero también para concientizar acerca de la importancia que tiene la persona que desempeña la gestión de grupos de trabajo. Además de la organización de los grupos, será responsable de formar a sus colaboradores en el conocimiento y ejecución de diversas habilidades personales y sociales que facilitarán la convivencia cotidiana y el trabajo colaborativo.",
      "image": "/images/nick-fewings-EkyuhD7uwSM-unsplash.jpg",
      "imageDesc": "Imagen ilustrativa del curso"
    },
    {
      "id": 2,
      "title": "El arte de comunicarse efectivamente",
      "info": "El Curso de Comunicación Efectiva propone trabajar aspectos ligados al desarrollo de nuestras habilidades comunicativas, tratando de repensar y reflexionar nuestra manera de interaccionar y relacionarnos en los diferentes contextos laborales, sociales e interpersonales.",
      "image": "/images/headway-5QgIuuBxKwM-unsplash.jpg",
      "imageDesc": "Imagen ilustrativa del curso"
    },
    {
      "id": 3,
      "title": "Liderazgo e inteligencia emocional",
      "info": "El presente curso virtual sobre inteligencia emocional en la empresa tiene como raíz el involucramiento objetivo de las decisiones dentro de un ambiente laboral, de forma que, a través de diversas herramientas que involucran el manejo de las emociones y el desarrollo de sus competencias directivas, se arme un clima productivo en donde todos los participantes apuntan hacia un mismo lado.",
      "image": "/images/tengyart-_VkwiVNCNfo-unsplash.jpg",
      "imageDesc": "Imagen ilustrativa del curso"
    },
    {
      "id": 4,
      "title": "Negociacion efectiva a distancia",
      "info": "El objetivo del curso es examinar los fundamentos de la resolución de conflictos a través del proceso de feedback y la inteligencia emocional, desarrollando habilidades de negociación mediante la incorporación de técnicas para negociar eficazmente.",
      "image": "/images/charlesdeluvio-Lks7vei-eAg-unsplash.jpg",
      "imageDesc": "Imagen ilustrativa del curso"
    },
    {
      "id": 5,
      "title": "Trabajo en equipo",
      "info": "El trabajo eficaz en equipo supone un nuevo estilo de gestión y el desarrollo de nuevas capacidades por parte de sus integrantes. Por eso este curso les permitirá fortalecer competencias para una mejor efectividad en el trabajo en equipo y una mayor profesionalización en la gestión pública.",
      "image": "/images/alfred-aloushy-Ow-joAY8NyY-unsplash.jpg",
      "imageDesc": "Imagen ilustrativa del curso"
    },
    {
      "id": 6,
      "title": "Como ser un buen jefe",
      "info": "La modalidad es práctica: los participantes aprenden conocimientos a partir de la reflexión propia y experiencia compartida entre los demás participantes.",
      "image": "/images/jason-goodman-Oalh2MojUuk-unsplash.jpg",
      "imageDesc": "Imagen ilustrativa del curso"
    },
    {
      "id": 7,
      "title": "Como ser efectivos: Automotivacion para alcanzar objetivos",
      "info": "Los beneficios de desarrollar su propio Liderazgo son: Mejorar las relaciones interpersonales y de negocio; Detectar oportunidades de mejora para el crecimiento profesional y personal, pieza clave para el emprendedor de esta era; Manejo de situaciones de conflicto; Reprogramar creencias limitantes en creencias codificadas para el éxito; Tomar conciencia sobre el impacto que tiene nuestros paradigmas culturales al momento de relacionarnos y conseguir resultados; Gestionar la incertidumbre con confianza; Gestionar nuestro propio conocimiento, desde un entendimiento neurocientífico.",
      "image": "/images/markus-spiske-QozzJpFZ2lg-unsplash.jpg",
      "imageDesc": "Imagen ilustrativa del curso"
    },
  ];
  
 return(
  <div class="courses__main">
    {
      fullCourses.map(course => 
        <CourseBox 
          key={course.id}
          title={course.title}
          info={course.info}
          image={course.image}
          imageDesc={course.imageDesc} />
      )
    }
  </div>
 );
}

export { CoursesMain };
