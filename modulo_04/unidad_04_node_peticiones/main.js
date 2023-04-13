const port = 3000;
const express = require("express");
const app = express();

app.get("/suscripcion/:name", (req, res) =>{
 const nombre = req.params.name || "usuario";
 let saludo = `Hola ${nombre}!`
 res.send(saludo);
});


app.listen(port , () =>{
  console.log(`El sevidor se encuentra escuchando en el puerto ${port}`);
 });