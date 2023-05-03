import React from "react";
import "../styles/components/pages/Platform.css"

const Platform = () => {
 return(
      <>
       <div className="hero hero-black" id="hero">
          <h1 className="hero__title">Accede a la plataforma</h1>
          <form action="POST">
              <div className="access__form-item">
                  <label htmlFor="user">Usuario</label>
                  <input type="text" id="user" name="user" placeholder="jDoe" />
              </div>
              <div className="access__form-item">
                  <label htmlFor="pw">Contraseña</label>
                  <input type="pw" id="pw" name="pw" placeholder="*********" />
              </div>
              <button className="access__button">Ingresar</button>
          </form>
          <small>¿Eres un nuevo usuario? <a href="/" className="access__register">REGISTRATE</a></small>
      </div>
     </>
 );
}

export { Platform };