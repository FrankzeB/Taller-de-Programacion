function aplicar_descuento(){
    const precio = document.getElementById("inp_precio").value;
    const descuento = document.getElementById("slt_operar").value;

    const resultado_descuento = (precio * descuento)/100
    const resultado_final = precio - resultado_descuento
    alert (resultado_final);
}

document.getElementById("slt_operar").addEventListener("change",aplicar_descuento);

//document.getElementById("btn_calcular").addEventListener("click",aplicar_descuento);
//Se ejecuta la hacer "click en el botón"