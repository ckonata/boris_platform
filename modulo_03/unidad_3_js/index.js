// Ejericio 1
// Crear el código que dada una distancia determine el medio de transporte apropiado de acuerdo a las siguientes reglas:
// 0 a 1000 metros = pie
// 1000 a 10000 metros = bicicleta
// 10000 a 30000 metros = colectivo
// 30000 a 100000 metros = auto
// +100000 = avion

let distancia = 1000;
let transporte = "";

if(distancia >= 0 && distancia < 1000){
    transporte = "pie";
}else if(distancia >= 1000 && distancia < 10000){
    transporte = "bicicleta";
}else if(distancia >= 10000 && distancia < 30000){
    transporte = "colectivo";
}else if(distancia >= 30000 && distancia < 100000){
    transporte = "auto";
}else{
    transporte = "avion";
}

console.log(transporte);

// Ejericio 2
// Crear el código que reciba como parámetro un array de números y devuelva el mayor.

let numeros = [10, 15, 4, 100, 5, 600, 1, 300, 1000, 25000, 2, 56, 21000];
let mayor = 0;

numeros.forEach(x => {
    if(x > mayor){
        mayor = x;
        }
});

console.log(mayor);