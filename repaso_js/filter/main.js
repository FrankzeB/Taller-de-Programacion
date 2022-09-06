//Ejemplo I
let helados = [
  "Banana Split",
  "Menta Granizada",
  "Cereza",
  "Dulce de Leche",
  "Granizado",
  "Pistacho",
];

let arreglo_filtrado = helados.filter((element) => element.length > 9);
console.log(arreglo_filtrado);

//Ejemplo II
let edades = [12, 5, 8, 130, 44];

function filtrar_por_edades(element) {
  return element >= 10;
}
let filtrado_edades = edades.filter(filtrar_por_edades);

console.log(filtrado_edades);
