export default class Vehiculo{//"export default" sirve para importar fuera.

    //estamos declarando o inicializando el atributo "marca"
    marca = ''

    constructor(km)//Esto es un metodo
    {
        this.kilometraje = km;//atributos globales
    }

    mostrar_km(){
        //uso de template string (``)
        //permite escribir en mas de una lìnea
        console.log(`
        El km del vehiculo es: ${this.kilometraje}km
        `)
    }

    mostrar_marca(){
        console.log(`
        Marca del vehiculo: ${this.marca}
        `)
    }
    //las variables (let) solo pueden ser creadas dentro de un "metodo"


}