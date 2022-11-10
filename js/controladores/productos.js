class ProductoController {
    
    constructor(){
        //super()
    }

        
    async obtenerProductos() {
        productos = await obtenerProductosService()
        renderProds()
    }

    async guardarProducto() {
        const producto = leerProductoIngresado()
        limpiarFormulario()

        const productoGuardado = await guardarProductoService(producto)
        console.log(productoGuardado)

        producto.push(productoGuardado)

        renderProds()
    }

    async actualizarProducto(id){
        console.log('actualizarProducto', id)

        const producto = leerProductoIngresado()
        limpiarFormulario()

        const productoActulizado = await actualizarProductoService(id, producto)
        console.log(productoActulizado)

        const index = productos.findIndex(producto => producto.id == productoActulizado.id)
        productos.splice(index,1,productoActulizado)

        renderProds()

    }

    async borrarProducto(id){
        console.log('borrarProducto', id)

        let productoBorrado = await borrarProductoService(id)

        const index = productos.findIndex(producto => producto.id == productoBorrado.id)
        productos.splice(index, 1)

        renderProds()

    }

}