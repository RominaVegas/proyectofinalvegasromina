const guardarCarrito = () => {
    if (carrito.length > 0) {
        localStorage.setItem("carritoPrendas", JSON.stringify(carrito))
    }
}

const recuperarCarrito = () => {
    const carritoAlmacenado = JSON.parse(localStorage.getItem("carritoPrendas"))
    return carritoAlmacenado
}

const carrito = recuperarCarrito() || []