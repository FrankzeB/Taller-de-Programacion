export default class Tienda {
  constructor() {}

  obtener_tienda = async () => {
    const tienda = await fetch("https://fakestoreapi.com/products");
    const lista_tienda = await tienda.json();

    let columnas = [];
    lista_tienda.forEach((element) => {
      let columna = `
            <div class="col-lg-4 mb-3">
                <div class="card" style="width: 18rem">
                <img height="350" src="${element.image}" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">
                        ${element.price}
                    </p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
            `;
      columnas.push(columna);
    });
    document.getElementById("row_card").innerHTML = columnas.join("");
  };
}