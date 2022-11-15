class CarritoController extends CarritoModel {

    constructor(){
        super()

        try {
            
            this.carrito = JSON.parse(localStorage.getItem('carrito')) || []
        } catch (error) {

            console.error('Algo ocurrió con la lectura del localStorage', error)
            this.carrito = []
            localStorage.setItem('carrito', this.carrito)
        }
    }

    elProductoEstaEnElCarrito(producto) {
        return this.carrito.filter(prod => prod.id == producto.id).length
    }

    obtenerProductoDeCarrito(producto) {
        return this.carrito.find(prod => prod.id == producto.id)
    }

    agregarAlCarrito(producto){
        //console.log(producto)

        if(!this.elProductoEstaEnElCarrito(producto)) {
            producto.cantidad = 1
            this.carrito.push(producto)
        } else {
            const productoDeCarrito = this.obtenerProductoDeCarrito(producto)
            productoDeCarrito.cantidad++
        }

        localStorage.setItem('carrito', JSON.stringify(this.carrito))

        /* const contadorCarrito = document.getElementById('search-bar__carrito-contador')
        contadorCarrito.innerText = this.carrito.length */
        
    }

    async borrarProductoCarrito(id){
        try {
            const index = this.carrito.findIndex(prod => prod.id == id)
            this.carrito.splice(index, 1)
            localStorage.setItem('carrito', JSON.stringify(this.carrito))

            await renderTablaCarrito(this.carrito)
        } catch (error) {
            console.log(error)
        }
    }

    async enviarCarrito(){
 
        try {
            const elemSectionCarrito = document.getElementsByClassName('section-carrito')[0]

            elemSectionCarrito.innerHTML = '<h2>Enviando carrito...</h2>'
            await carritoService.guardarCarritoServicio(this.carrito)
            this.carrito = []
            localStorage.setItem('carrito', JSON.stringify(this.carrito))

            elemSectionCarrito.innerHTML = `
                <button class="btn btn__cerrarCarrito" onclick="carritoController.btnCerrarCarrito()"><i class="fas fa-times-circle"></i></button>
                <h2 id="carrito-enviado">El carrito fue enviado con éxito</h2> 
                <img src="../img/svg/299110_check_sign_icon.svg" alt="Check Icon" class="carrito-img">

                `

        } catch (error) {
            console.error(error)
        }
    }

    btnCerrarCarrito(){
        /* const elemSectionCarrito = document.getElementsByClassName('section-carrito')[0] */
        const elemSectionCarritoVisible = document.getElementsByClassName('section-carrito--visible')[0] 

        if (elemSectionCarritoVisible.className.includes('--visible')) elemSectionCarritoVisible.classList.remove('section-carrito--visible')
    }
    
    btnVaciarCarrito(){
        this.carrito.length = 0
        renderTablaCarrito(this.carrito)
    }

}

const carritoController = new CarritoController()