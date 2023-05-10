const titulo = document.querySelector("h1#titulo")
const slogan = document.querySelector("p#slogan")
const imgCarrito = document.querySelector("img#imgCarrito")
const container = document.querySelector("div#container")
const inputSearch = document.querySelector("input#inputSearch")
const btnCheckout = document.querySelector("div.btn-checkout")
const productos = []
const URL = 'js/productos.json'

async function obtenerProductosAsync() {
  try {
    const response = await fetch(URL)
    const data = await response.json()
    productos.push(...data)
    cargarProductos(productos)
  } catch (error) {
    console.log(error)
    container.innerHTML = retornoCardError()
  }
}

const cargarProductos = (array) => {
  array.forEach((producto) => {
    container.innerHTML += retornoCardHTML(producto)
  })
  activarClickEnBotones()
}

const activarClickEnBotones = () => {
  const btnComprar = document.querySelectorAll("button.button.button-outline.button-add")
  for (boton of btnComprar) {
    boton.addEventListener("click", (e) => {
      let resultado = productos.find((producto) => producto.id === parseInt(e.target.id))
      carrito.push(resultado)
      guardarCarrito()
      notificar()
    })
  }
}



function notificar() {
  Toastify({
    text: "¡Producto agregado! Continúa comprando o dirígete al carrito.",
    className: "custom-toast",
    duration: 4000,
    close: true,
    gravity: "center",
    position: "center",
    stopOnFocus: true,
    style: {
      background: " rgb(209, 147, 242)",
      color: "#fff",
      borderRadius: "8px",
      fontWeight: "bold",
      fontSize: "16px",
      textAlign: "center",
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.3)",
    },
  }).showToast();
}



function filtrarProductos() {
  const busqueda = inputSearch.value.toLowerCase()
  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda)
  )
  cargarProductosFiltrados(productosFiltrados)
}

function cargarProductosFiltrados(array) {
  container.innerHTML = ""
  if (array.length === 0) {
    container.innerHTML = retornoCardVacio()
  } else {
    array.forEach((producto) => {
      container.innerHTML += retornoCardHTML(producto)
    })
  }
  activarClickEnBotones()
}

obtenerProductosAsync()
recuperarCarrito()

btnCheckout.addEventListener("click", () => (location.href = "checkout.html"))

inputSearch.addEventListener("input", filtrarProductos)