const URL_PRODUCTOS = 'https://633eca1d83f50e9ba3b84b17.mockapi.io/productos/'

async function obtenerProductosService() {
    let productos = await get(URL_PRODUCTOS)
    console.log(productos)
    return productos
}

async function guardarProductoService(producto) {
    const productoGuardado = await post(URL_PRODUCTOS, producto)
    return productoGuardado
}

async function actualizarProductoService(id, producto){
    const productoActualizado = await put(URL_PRODUCTOS, id, producto)
    return productoActualizado
}

async function borrarProductoService(id){
    const productoBorrado = await del(URL_PRODUCTOS, id)
    return productoBorrado
}

/* testes */
/* const producto = {
    nombre: 'Bolso',
    descripcion: 'Bolso de mano color rojo',
    precio: 1234,
    stock: 12 

} */
//guardarProductoService(producto) 
//actualizarProductoService(3, producto)
//borrarProductoService(2)