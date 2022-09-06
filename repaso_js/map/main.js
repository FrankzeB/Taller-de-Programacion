//Primer paso: Crear un arreglo de prueba
let numeros = [1, 5, 10, 15];

let nuevo_array = numeros.map((element) => element * 2);
console.log(nuevo_array);

//Ejercicio
let valores = [1, 4, 9];

let raices = valores.map((element) => Math.sqrt(element));
console.log(raices);

//Mapear un array de objetos
let datos_personales = [
  {
    nombre: "Franco",
    apellido: "Bravo",
  },
  {
    nombre: "Bruno",
    apellido: "Acuña",
  },
  {
    nombre: "Ignacio",
    apellido: "Cappellini",
  },
];

let nombre_apellido = datos_personales.map(
  (element) => `${element.nombre} ${element.apellido}`
);
console.log(nombre_apellido);
