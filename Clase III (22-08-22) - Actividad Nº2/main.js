import Pitagoras from "./pitagoras.js";

function ejecutar() {
  let pitagoras = new Pitagoras();

  pitagoras.cateto_adyacente = document.getElementById("inp_catetoa").value;
  pitagoras.cateto_opuesto = document.getElementById("inp_catetoo").value;

  let respuesta = pitagoras.calcular_hipotenusa();

  document.getElementById("resultado").textContent = respuesta;
}
document.getElementById("btn_calcular").addEventListener("click", ejecutar);
