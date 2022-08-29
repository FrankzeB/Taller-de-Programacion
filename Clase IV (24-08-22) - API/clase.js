export default class Criptomonedas {

    constructor(){}
    
        obtener_criptos = async () =>{
        const criptos = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false');
        //fetch carga datos a través del protocolo "http"
    
        const lista_criptos = await criptos.json()
    
        let filas = []
        lista_criptos.forEach((element,index) => {
            let fila = `
                <tr>
                    <td>${index+1}</td>
                    <td><img style="width:4ron" src="${element.image}"></td>
                    <td>${element.name}</td>
                    <td>${element.symbol}</td>
                    <td>${element.current_price}</td>
                    <td>${element.total_volume}</td>
                </tr>
            `
            filas.push(fila)
        });
        document.getElementById("tbl_body").innerHTML=filas.join("")
    }
}