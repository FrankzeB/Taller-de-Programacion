import Pitagoras from "./pitagoras.js";

function ejecutar() {
  //creamos la instancia de la clase
  let pitagoras = new Pitagoras();

  /*A través de la instancia accedemos a los atributos de la misma, para
  asignarle un valor a cada un de ellas*/
  pitagoras.cateto_adyacente = document.getElementById("inp_catetoa").value;
  pitagoras.cateto_opuesto = document.getElementById("inp_catetoo").value;

  /*invocamos al metodo que posteriormente nos entrega o retorna una respuesta.
  Dicha se asigna o guarda en variables "respuesta"*/
  let respuesta = pitagoras.calcular_hipotenusa();

  //obtenemos ael <h1> para asignarle y mostrar el resultado de la hipotenusa
  document.getElementById("resultado").textContent = respuesta;
}
document.getElementById("btn_calcular").addEventListener("click", ejecutar);
