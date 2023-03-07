const port = 3000;
const express = require("express");
const app = express();

app.get("/", (req, res) =>{
 res.send("Esta es la pagina home!");
});

app.get("/about", (req, res) =>{
 res.send("Esta es la pagina sobre nosotros!");
});

app.route("/suscripcion")
.get((req, res) =>{
 res.send("Obtenemos un listado de suscripciones")
})
.post((req, res) =>{
 res.send("Agrega una nueva suscripcion")
})
.delete((req, res) =>{
 res.send("Elimina una suscripcion")
})
 
app.listen(port , () =>{
  console.log(`El sevidor se encuentra escuchando en el puerto ${port}`);
 });