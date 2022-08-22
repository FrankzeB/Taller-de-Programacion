export default class Pitagoras {
  cateto_opuesto;
  cateto_adyacente;

  constructor() {}

  calcular_hipotenusa() {
    let bloque1 =
      Math.pow(this.cateto_adyacente, 2) + Math.pow(this.cateto_opuesto, 2);

    let h = Math.sqrt(bloque1);

    return h;
  }
}
