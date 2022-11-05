var elemSectionCarrito = document.getElementsByClassName('section-carrito')[0]

function start(){

    /*FUNCIONES HELPERS */

    //AJAX
    function ajax(url, metodo = 'get') {
        const xhr = new XMLHttpRequest()
        xhr.open(metodo, url)
        xhr.send()

        return xhr
    }
    
    function getNombreArchivo(id) {
        return 'vistas/' + id + '.html'
    }

    function marcarLink(id) {
        const links = document.querySelectorAll('header nav a')
        links.forEach( link => {
            if(link.id === id) link.classList.add('active')
            else link.classList.remove('active')
        })
    }

    function initJS(id) {
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

    function cargarPlantilla(id) {
        let archivo = getNombreArchivo(id)

        let xhr = ajax(archivo)

        xhr.addEventListener('load', () => {
            if(xhr.status === 200) {
                let plantilla = xhr.response

                let main = document.querySelector('main')
                main.innerHTML = plantilla

                //carga del codigo script de la plantilla

                initJS(id)
            }
        })
    }

    const cargarPlantillas = () => {

        /* CARGA INICIAL DE LA VISTA DETERMINADA POR LA URL VISITADA */

        let id = location.hash.slice(1) || 'inicio' // #inicio => slice(1) => inicio
        marcarLink(id)
        cargarPlantilla(id)

        /* CARGA DE CADA UNO DE LOS CONTENIDOS SEGUN LA NAVEGACION LOCAL */

        const links = document.querySelectorAll('header nav a')
        //console.log(links)

        links.forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault()

                let id = link.id
                console.log(id)
                location.hash = id
            })
        })

         window.addEventListener('hashchange', () => {
            console.log('Cambió la URL')

            let id = location.hash.slice(1) || 'inicio'
            marcarLink(id)
            cargarPlantilla(id)
        }) 

    }
    cargarPlantillas()
}
start()