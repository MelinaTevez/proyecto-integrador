function initAlta(){
    console.warn('initAlta()')

    const productos = [
        {nombre: 'Reloj', proecio: '12423', stock: '35', marca: 'Seiko', categoria:'despertador', detalles:'analogico', foto: '', envio: false}
    ]

    const inputs = document.querySelectorAll('input')
    const form = document.querySelector('form')
    const button = document.querySelector('button')
    console.log(inputs, form, button)

    //va a asegurarse que todos los campos sean true para luego dar la posibilidad de enviar el formulario
    const camposValidos = [false, false, false, false, false, false, false, false]

    button.disabled = true

    //mostrar u ocultar el mensaje
    const setCustomValidityJS = (mensaje, index) => {
        let divs = document.querySelectorAll('form div')
        divs[index].innerHTML = mensaje 
        divs[index].style.display = mensaje ? 'block' : 'none'
    }

    //para comprobar la validez de los campos
    const algunCampoValido = () => {
        let valido =
            camposValidos[0] &&
            camposValidos[1] &&
            camposValidos[2] &&
            camposValidos[3] &&
            camposValidos[4] &&
            camposValidos[5] &&
            camposValidos[6]

        return !valido
    }


    //va a validar campos
    const validar = (valor, validador, index) => {
        
        if(!validador.test(valor)) {
            setCustomValidityJS('Este campo no es valido', index)
            camposValidos[index] = false
            button.disabled = true
            return null
        }

        camposValidos[index] = true
        button.disabled = algunCampoValido() //boolean

        setCustomValidityJS('', index)
        return valor
    }

    //array con todas las expresiones regularesn de los campos
    const regExpValidar = [

        /^.+$/,      // regexp nombre
        /^.+$/,      // regexp precio
        /^[0-9]+$/,  // regexp stock
        /^.+$/,      // regexp marca
        /^.+$/,      // regexp categoria
        /^.+$/,      // regexp detalles
        /^.+$/,      // regexp foto
    ]


    inputs.forEach((input, index) => [
        input.addEventListener('input', () => {
            validar(input.value, regExpValidar[index], index)
        })
    ])

    form.addEventListener('submit', e => {
        e.preventDefault()

        const producto = {
        nombre:     inputs[0].value,
        precio:     inputs[1].value,
        stock:      inputs[2].value,
        marca:      inputs[3].value,
        categoria:  inputs[4].value,
        detalles:   inputs[5].value,
        foto:       inputs[6].value,
        envio:      inputs[7].checked,
        }

        //borrar todos los inputs
        inputs.forEach(input => input.value = '')

        console.log(producto)
        productos.push(producto)

        button.disabled = true

    // renderProdsObjetos()
        //renderProdsTemplateString()
        renderProds()
    })

    //me permite dibujar los productos
    const renderProdsObjetos = () => {
        let html = ''
        for (let i = 0; i < productos.length; i++) {
            html += `<p>${JSON.stringify(productos[i])}</p>`
        }
        document.getElementById('listado-productos').innerHTML = html
    }

    //me permite dibujar cada una de las nuevas filas de 'Listado de productos'
    const renderProdsTemplateString = () => {
        let html = ''
        html+= '<table>'
        
        html += 
        `
        <table>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Marca</th>
                <th>Categoría</th>
                <th>Detalles</th>
                <th>Foto</th>
                <th>Envío</th>
            </tr>
        `
        for (let i = 0; i < productos.length; i++) {
            let producto = productos[i]
            html += 
            `
            <tr>
                <th>${producto.nombre}</th>
                <th>${producto.precio}</th>
                <th>${producto.stock}</th>
                <th>${producto.marca}</th>
                <th>${producto.categoria}</th>
                <th>${producto.detalles}</th>
                <th>${producto.foto}</th>
                <th>${producto.envio}</th>
            </tr>
            `
            
        }
        console.log(html)

        html += '</table>'

        document.getElementById('listado-productos').innerHTML = html
    }

    const renderProds = () => {

        const xhr = new XMLHttpRequest()
        xhr.open('get', 'plantillas/listado.hbs')
        xhr.addEventListener('load', () => {
            if(xhr.status === 200){
                let plantillaHbs = xhr.response
                console.log(plantillaHbs)

                let template = Handlebars.compile(plantillaHbs)
                console.log(template)

                let html = template({productos: productos})

                document.getElementById('listado-productos').innerHTML = html
            }
        })
        xhr.send()
    }
    //renderProds()

}
