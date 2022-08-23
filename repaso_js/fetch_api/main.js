function mostrar_objeto() {
  let cliente = {
    nombre: "Pepito",
    apellido: "Pozzo",
    dni: 45555555,
    correos: {
      outlook: "superpepito@outlook.com",
      gmail: "pepis@gmail.com",
      yahoo: "elpepo@yahoo.com.ar",
    },
  };
  /*
  forma de mostrar las propiedades de los objetos tradicional
  const outlook = cliente.coreos.outlook;
  const gmail = cliente.coreos.gmail;
  const yahoo = cliente.coreos.yahoo;
  */

  //forma nueva de mostrar las propiedades de los objetos - Destrecturing Object
  const { outlook, gmail, yahoo } = cliente.correos;

  console.log(`
    Correos de Pepito:

    outlook: ${outlook}
    gmail: ${gmail}
    yahoo: ${yahoo}
  `);
}
//ejecuto la funcion sin accionarla en un botón
mostrar_objeto();

//creamos función flecha
const consumir_api = async () => {
  //estamos ralizando mediante la funcion nativa de javascript denominada fetch, una solicitud HTTP a través del método GET de manera de obtener las publicaciones en notación JSON.
  const publicaciones = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const publicaciones_definitivas = await publicaciones.json();

  let items_totales = []

  publicaciones_definitivas.forEach((element) => {
    //console.log(element.title);
    let item = `<li class="list-group-item">${element.title}</li>`
    items_totales.push(item)

  });
  document.getElementById("lista_publicaciones").innerHTML = items_totales.join('')
};
consumir_api();

//un "api" es una interfaz de programación que sirve para la comunicación entre aplicaciones
//el JSON es una cadena de texto; es un formato de notación de información.
