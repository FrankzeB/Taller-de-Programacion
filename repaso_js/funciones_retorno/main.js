const calcular_tension = (a, b) => {
  const t = a * b;
  return t;
};
//Esta funcion recibe los parametros "a" y "b" para calcular. Lo que esta entre "()" son argumentos.

const operar = () => {
  let r = document.getElementById("inp_r").value;
  let i = document.getElementById("inp_i").value;

  let respuesta = calcular_tension(r, i);
  //invocar a la función

  alert(respuesta);
};
//Se va a comunicar con la funcion anterior, pero antes priorizando los datos despues de ejecutarse.

document.getElementById("btn_operar").addEventListener("click", operar);
//va a ejecutarse pero sin antes recibir los dos parametros de la primera funcion.
