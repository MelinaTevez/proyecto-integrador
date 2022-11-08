let productos = []

async function obtenerProductos() {
    productos = await obtenerProductosService()
    renderProds()
}