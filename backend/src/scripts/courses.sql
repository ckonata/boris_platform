CREATE DATABASE boris;

USE boris;

CREATE TABLE courses( 
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(255) NOT NULL,
 description VARCHAR(500) NOT NULL,
 image VARCHAR(500) NULL,
 imageDescription VARCHAR(500) NULL
);

INSERT INTO courses (name, description, image, imageDescription) VALUES ('Liderazgo de equipos remotos', 'El curso está diseñado para aquellas personas encargadas de facilitar el proceso de trabajo de un equipo, pero también para concientizar acerca de la importancia que tiene la persona que desempeña la gestión de grupos de trabajo. Además de la organización de los grupos, será responsable de formar a sus colaboradores en el conocimiento y ejecución de diversas habilidades personales y sociales que facilitarán la convivencia cotidiana y el trabajo colaborativo.', 'xqr2vqrdomu5tpodo9r3', 'Imagen ilustrativa del curso');
INSERT INTO courses (name, description, image, imageDescription) VALUES ('El arte de comunicarse efectivamente', 'El Curso de Comunicación Efectiva propone trabajar aspectos ligados al desarrollo de nuestras habilidades comunicativas, tratando de repensar y reflexionar nuestra manera de interaccionar y relacionarnos en los diferentes contextos laborales, sociales e interpersonales.', 'nkuxho3hn94ffhkjroax', 'Imagen ilustrativa del curso');
INSERT INTO courses (name, description, image, imageDescription) VALUES ('Liderazgo e inteligencia emocional', 'El presente curso virtual sobre inteligencia emocional en la empresa tiene como raíz el involucramiento objetivo de las decisiones dentro de un ambiente laboral, de forma que, a través de diversas herramientas que involucran el manejo de las emociones y el desarrollo de sus competencias directivas, se arme un clima productivo en donde todos los participantes apuntan hacia un mismo lado.', 'ojbdvznsxz3ew6jxechn',  'Imagen ilustrativa del curso');
INSERT INTO courses (name, description, image, imageDescription) VALUES ('Negociacion efectiva a distancia', 'El objetivo del curso es examinar los fundamentos de la resolución de conflictos a través del proceso de feedback y la inteligencia emocional, desarrollando habilidades de negociación mediante la incorporación de técnicas para negociar eficazmente.', 'hwqyeceyeue3ywrhsp4r', 'Imagen ilustrativa del curso');
INSERT INTO courses (name, description, image, imageDescription) VALUES ('Trabajo en equipo', 'El trabajo eficaz en equipo supone un nuevo estilo de gestión y el desarrollo de nuevas capacidades por parte de sus integrantes. Por eso este curso les permitirá fortalecer competencias para una mejor efectividad en el trabajo en equipo y una mayor profesionalización en la gestión pública.', 'cogrv3bhkfjh2fmi2uzd', 'Imagen ilustrativa del curso');
INSERT INTO courses (name, description, image, imageDescription) VALUES ('Como ser un buen jefe', 'La modalidad es práctica: los participantes aprenden conocimientos a partir de la reflexión propia y experiencia compartida entre los demás participantes.', 'zwpdnicxqfa98rynxiuw', 'Imagen ilustrativa del curso');
INSERT INTO courses (name, description, image, imageDescription) VALUES ('Como ser efectivos: Automotivacion para alcanzar objetivos', 'Los beneficios de desarrollar su propio Liderazgo son: Mejorar las relaciones interpersonales y de negocio; Detectar oportunidades de mejora para el crecimiento profesional y personal, pieza clave para el emprendedor de esta era; Manejo de situaciones de conflicto; Reprogramar creencias limitantes en creencias codificadas para el éxito; Tomar conciencia sobre el impacto que tiene nuestros paradigmas culturales.', 'cboggwinjhltnb8pj0wm','Imagen ilustrativa del curso');
