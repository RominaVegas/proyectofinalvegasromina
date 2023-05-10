const retornoCardHTML = (producto) => {
    return `<div class="card">
                <div class="card-image"><img src="${producto.imagen}" alt="${producto.imagen}"></div>
                <div class="card-name">${producto.nombre}</div>
                <div class="card-price">$ ${producto.precio}</div>
                <div class="card-button">
                    <button class="button button-outline button-add" id="${producto.id}" title="Clic para agregar al carrito">AGREGAR</button>
                </div>
            </div>`
}

const retornoCardError = () => {
    return `<div class="card-error">
                <h2>YA REGRESAMOS!!</h2>
                <h3>No pudimos cargar los articulos seleccionados.</h3>
                <h3>Intenta nuevamente en breve...</h3>
            </div>`
}

const retornoFilaCheckoutHTML = (producto) => {
    return `<tr>
                <td> <img src="${producto.imagen}" alt="${producto.imagen}"></td>
                <td>${producto.nombre}</td>
                <td>${producto.precio}</td>
                <td><button id="${producto.id}" class="button-outline">X</button></td>
            </tr>`
}