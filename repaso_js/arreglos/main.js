//vamos a crear un arreglo

let lenguajes = ["Java", "Python", "JavaScript", "C++", "Visual Basic", "Go"];

//longitud de un arreglo
let longitud = lenguajes.length;
console.log("Longitud del Arreglo = " + longitud);

//acceder al último elemento de un arreglo
let ultimo = lenguajes[longitud - 1];

//recorrer un arreglo
lenguajes.forEach((element, index) => {
  console.log(index + 1 + "-" + element);
});

//agregar un elemento al final del arreglo
lenguajes.push("Php");
console.log(lenguajes);

//como elimino el último elemento de un arreglo (línea 18 & 19)
lenguajes.pop();
console.log(lenguajes);

//agregar elemento al inicio de un arreglo
lenguajes.unshift("C#");
console.log(lenguajes);

//como eliminar el primer elemento de un arreglo (línea 26 & 27)
lenguajes.shift();
console.log(lenguajes);
