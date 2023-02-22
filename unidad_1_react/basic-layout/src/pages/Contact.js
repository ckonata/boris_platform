import React from "react";
import "../styles/components/pages/Contact.css"

const Contact = () => {
 return(
     <>
     <div class="contact">
            <div>
                <h1>Contactanos</h1>
                <p>¿Tenes alguna duda, comentario o sugerencia? Completa el formulario y te responderemos a la brevedad.</p>
            </div>
            <form action="POST" class="">
                <div class="contact__form-item">
                    <label for="name">Nombre</label>
                    <input type="text" id="name" name="name" placeholder="Joe Doh" />
                </div>
                <div class="contact__form-item">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="jdoe@mail.com" />
                </div>
                <div class="contact__form-item">
                    <label for="subject">Asunto</label>
                    <input type="subject" id="subject" name="subject" placeholder="Cuentanos de que se trata" />
                </div>
                <div class="contact__form-item">
                    <label for="comment">Comentario</label>
                    <input type="comment" id="comment" name="comment" placeholder="Escribe tu consulta aqui" />
                </div>
                <button>Enviar</button>
            </form>
        </div>
    </>
 );
}

export { Contact };