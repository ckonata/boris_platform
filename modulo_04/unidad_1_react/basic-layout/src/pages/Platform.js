import React from "react";
import "../styles/components/pages/Platform.css"

const Platform = () => {
 return(
      <>
       <div class="hero hero-black" id="hero">
          <h1 class="hero__title">Accede a la plataforma</h1>
          <form action="POST">
              <div class="access__form-item">
                  <label for="user">Usuario</label>
                  <input type="text" id="user" name="user" placeholder="jDoe" />
              </div>
              <div class="access__form-item">
                  <label for="pw">Contraseña</label>
                  <input type="pw" id="pw" name="pw" placeholder="*********" />
              </div>
              <button class="access__button">Ingresar</button>
          </form>
          <small>¿Eres un nuevo usuario? <a href="/" class="access__register">REGISTRATE</a></small>
      </div>
     </>
 );
}

export { Platform };