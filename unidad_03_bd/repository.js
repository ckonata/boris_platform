const pool = require("./bd.js") ;

// Select
// const employees = pool
//  .query("SELECT * FROM empleados")
//  .then((result) => {
//    console.log(result);
//    return result;
//  });

// Insert
const employee = {
  nombre: "Juan",
  apellido: "Lopez"
}

pool
 .query("INSERT INTO empleados SET ?", [employee])
 .then((result) => { 
  console.log(result) 
 });

// Update
// const userIdUpdate = 1;
// const updateEmployee = {
//   nombre: "Mario",
//   apellido: "Lopez"
// }

// pool
//  .query("UPDATE empleados SET ? WHERE id = ?", [updateEmployee, userIdUpdate])
//  .then((result) => { 
//   console.log(result) 
//  }); 

// // Delete
// const userIdDelete = 1;
// pool
//  .query("DELETE FROM empleados WHERE id = ?", [userIdDelete])
//  .then((result) => { 
//   console.log(result) 
// });