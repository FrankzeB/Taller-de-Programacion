import Vehiculo from "./vehiculo.js";

//FORMA 1 - envio de parametros a traves del constructor
function ejecutar() {
  let km = document.getElementById("inp_km").value;
  //creamos la instancia de la clase
  let vehiculo = new Vehiculo(km);//se crea la instancia y se envia datos al constructor
  vehiculo.mostrar_km();//mediante el uso de la instancia invocamos el metodo "mostrar_km"
}

document.getElementById("btn_mostrar").addEventListener("click", ejecutar);
//addEventListener: Agregando un elemento a "escuchar" (estar atento a la escucha de un "click")
//El DOM es una interfaz de programacion que permite comunicar JavaScript con HTML
//Un modulo es un archivo que lleva las operaciones de los demàs y el cual esta confromada por partes

//FORMA 2
const mostrar_marca = () => {
  let vehiculo = new Vehiculo();
  //asignamos un valor al atributo
  vehiculo.marca = document.getElementById("slt_marca").value;
  //posteriormente invocamos al metodo "mostrar_marca"
  vehiculo.mostrar_marca();
};
document.getElementById("btn_aceptar").addEventListener("click", mostrar_marca);
