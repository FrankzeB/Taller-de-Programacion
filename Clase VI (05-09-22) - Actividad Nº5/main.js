//Ejercicio 1
obtener_api = async () => {
  const api = await fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales");

  const lista_api = await api.json();

  let filas = [];
  lista_api.forEach((element, index) => {
    let fila = `
        <tr>
            <td>${index + 1}</td>
            <td>${element.casa.compra}</td>
            <td>${element.casa.venta}</td>
            <td>${element.casa.agencia}</td>
            <td>${element.casa.nombre}</td>
            <td>${element.casa.variacion}</td>
            <td>${element.casa.ventaCero}</td>
            <td>${element.casa.decimales}</td>
        </tr>
    `;
    filas.push(fila);
  });
  document.getElementById("tbl_body").innerHTML = filas.join("");
};
obtener_api();

//A. Crear el siguiente array tal y como se muestra a continuación. Deberá crearse de manera global.
let criptos = [
  "Bitcoin",
  "Ethereum",
  "Tether",
  "BNB",
  "Cardano",
  "Dai",
  "Helium",
  "Shiba Inu",
  "Tron",
  "Cronos",
  "Solana",
];

//B. Agregar al inicio del arreglo la criptomoneda ‘Stellar’.
criptos.unshift("Stellar");
console.log(criptos);

//C. Eliminar las criptomonedas "Shiba Inu" y "Tron" respectivamente
let indice = criptos.indexOf("Shiba Inu");
criptos.splice(indice, 2);
console.log(criptos);

//D. Agregar la criptomoneda ‘Gate’ al final del arreglo.
criptos.push("Gate");
console.log(criptos);

//E. Crear una función que imprima en un párrafo lo siguiente:
function arreglos() {
  //a) La longitud del arreglo.
  let longitud = criptos.length;
  //b) El último elemento del arreglo.
  let ultimo = criptos[longitud - 1];
  //c) La criptomoneda Helium obteniendo su indice previamente con el método correspondiente.
  let indice2 = criptos.indexOf("Helium");

  //Muestro en un parrafo
  document.getElementById("p_arreglos").innerHTML = `
        Longitud = ${longitud} <br>
        Último Elemento = ${ultimo} <br>
        Indice de la Criptomoneda Helium = ${indice2} <br>
    `;
}
document.getElementById("btn_arreglo").addEventListener("click", arreglos);

//F. Crear una función que recorra el arreglo e imprimirlo en una lista. Es decir, en un ListGroup de Bootstrap 5. La función se deberá invocar a través de un botón.
const mostrar_lista = () => {
  let filas = [];
  let lista_criptos = criptos.forEach((element, index) => {
    let fila = `
            <li class="list-group-item">${element}</li>
            `;
    filas.push(fila);
  });
  document.getElementById("ul_arreglos").innerHTML = filas.join("");
};
document.getElementById("btn_lista").addEventListener("click", mostrar_lista);

//Ejercicio Nº 3
const mostrar_objeto = () => {
  const framework = {
    titulo: "Framework utilizado en la actualidad",
    nombre: "Angular",
    características: {
      lenguaje: "TypeScript",
      patron: "MVVM",
      spa: "si",
    },
  };

  const { titulo, nombre } = framework;
  const { lenguaje, patron, spa } = framework.características;

  console.log(`
    Título: ${titulo}
    Nombre: ${nombre}

    Características:

    Lenguaje: ${lenguaje}
    Patrón: ${patron}
    Spa: ${spa}
  `);
};
document.getElementById("btn_objeto").addEventListener("click", mostrar_objeto);
