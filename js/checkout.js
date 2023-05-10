const tbody = document.querySelector("tbody")
const spanTotal = document.querySelector("span")
const btnComprar = document.querySelector("#btnComprar")

recuperarCarrito()
cargarCarrito()

function cargarCarrito() {
    tbody.innerHTML = ""
    if (carrito.length > 0) {
        carrito.forEach(producto => tbody.innerHTML += retornoFilaCheckoutHTML(producto))
        activarClickEnBotonesDelete()
        spanTotal.innerText = calcularTotalCarrito().toLocaleString()
    } else {
        spanTotal.innerText = "0.00"
        tbody.innerHTML = ""
    }
}

function calcularTotalCarrito() {
    return carrito.reduce((acc, producto) => acc + producto.precio, 0)
}

function activarClickEnBotonesDelete() {
    const botones = document.querySelectorAll("button.button-outline")
    if (botones) {
        for (let boton of botones) {
            boton.addEventListener("click", (e) => {
                let indice = carrito.findIndex((prod) => prod.id === parseInt(e.target.id))
                if (indice > -1) {
                    Swal.fire({
                        title: '¿Está seguro de que desea eliminar este producto del carrito?',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Sí, eliminar',
                        cancelButtonText: 'Cancelar'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            carrito.splice(indice, 1)
                            guardarCarrito()
                            cargarCarrito()
                        }
                    })
                }
            })
        }
    }
}

btnComprar.addEventListener("click", () => {
    Swal.fire({
        title: 'Muchas gracias por su compra.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    })
    carrito.length = 0
    localStorage.removeItem("carritoPrendas")
    cargarCarrito()
})