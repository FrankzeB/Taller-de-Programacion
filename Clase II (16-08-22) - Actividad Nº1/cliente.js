export default class Cliente {
  constructor(n, a, d) {
    this.nombre_cliente = n;
    this.apellido_cliente = a;
    this.dni_cliente = d;
  }

  mostrar_datospersonales() {
    alert(`
    Los datos son: ${this.nombre_cliente}, ${this.apellido_cliente}, ${this.dni_cliente}
    `);
  }
}
