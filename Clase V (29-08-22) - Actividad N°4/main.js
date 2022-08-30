import Tienda from "./clase.js";

function aplicar_categoria() {
  let categoria = document.getElementById("slt_categoria").value;
  let tienda = new Tienda();
  tienda.obtener_tienda(categoria);
}
document.getElementById("slt_categoria").addEventListener("change", aplicar_categoria);