var elemSectionCarrito = document.getElementsByClassName('section-carrito')[0]

class Main {
    //AJAX
    async ajax(url, metodo = 'get') {

        try {
            const respuesta = await fetch(url, {method: metodo})
            const resultado = await respuesta.text()
            
            return resultado
        } catch (error) {
            console.error(error)
        }
        
    }

    getNombreArchivo(id) {
        return 'vistas/' + id + '.html'
    }

    marcarLink(id) {
        const links = document.querySelectorAll('header nav a')
        links.forEach( link => {
            if(link.id === id) link.classList.add('active')
            else link.classList.remove('active')
        })
    }

    initJS(id) {
        if( id === 'alta' ) {
            initAlta()
        }
        else if( id === 'inicio' ) {
            initInicio()
        }
        else if( id === 'nosotros' ) {
            initNosotros()
        }
        else if( id === 'contacto' ) {
            initContacto()
        }
    }

    async cargarPlantilla(id) {
        let archivo = this.getNombreArchivo(id)
    
        let xhr = await this.ajax(archivo)
    
        xhr.addEventListener('load', () => {
            if(xhr.status === 200) {
                let plantilla = xhr.response
    
                let main = document.querySelector('main')
                main.innerHTML = plantilla
    
                //carga del codigo script de la plantilla
    
                this.initJS(id)
            }
        })
    }

    async cargarPlantillas() {
    
        /* CARGA INICIAL DE LA VISTA DETERMINADA POR LA URL VISITADA */

        let id = location.hash.slice(1) || 'inicio' // #inicio => slice(1) => inicio
        this.marcarLink(id)
        await this.cargarPlantilla(id)

        /* CARGA DE CADA UNO DE LOS CONTENIDOS SEGUN LA NAVEGACION LOCAL */

        const links = document.querySelectorAll('header nav a')

        links.forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault()

                let id = link.id
                // console.log(id)
                location.hash = id
            })
        })
    
        window.addEventListener('hashchange', async () => {
            //console.log('Cambió la URL')
            let id = location.hash.slice(1) || 'inicio'
            this.marcarLink(id)
            await this.cargarPlantilla(id)
        }) 
    
    }
        
    async start() {
        await this.cargarPlantilla()
    }
}

const main = new Main()
main.start()