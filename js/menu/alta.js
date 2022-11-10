class FormularioAlta {

    inputs  = null
    form = null
    button = null
    camposValidos = [false, false, false, false, false, false, false]

    //Expresiones Regulares
    regExpValidar = [
        /^.+$/,      // regexp nombre
        /^.+$/,      // regexp precio
        /^[0-9]+$/,  // regexp stock
        /^.+$/,      // regexp marca
        /^.+$/,      // regexp categoria
        /^.+$/,      // regexp detalles
        /^.+$/,      // regexp foto
    ]

    constructor(){

        this.inputs = document.querySelectorAll('main form input')
        this.form = document.querySelector('main form')
        this.button = document.querySelector('main form button')

        button.disabled = true
        
        inputs.forEach((input, index) => [
            input.addEventListener('input', () => {
                validar(input.value, regExpValidar[index], index)
            })
        ])
    
        form.addEventListener('submit', e => {
            e.preventDefault()
            
            guardarProducto()
        })
    
        obtenerProductos()
    }
}

/* ------ DECLARACIONES DE VARIABLES Y FUNCIONES GLOBALES ----- */


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


const renderProds = () => {

    const xhr = new XMLHttpRequest()
    xhr.open('get', 'plantillas/listado.hbs')
    xhr.addEventListener('load', () => {
        if(xhr.status === 200){
            let plantillaHbs = xhr.response
            //console.log(plantillaHbs)

            let template = Handlebars.compile(plantillaHbs)
            //console.log(template)

            let html = template(
                {
                    productos: productos,
                    validos: !algunCampoValido()
                }
            )

            document.getElementById('listado-productos').innerHTML = html
        }
    })
    xhr.send()
}

function leerProductoIngresado(){
    return {
        nombre:     inputs[0].value,
        precio:     inputs[1].value,
        stock:      inputs[2].value,
        marca:      inputs[3].value,
        categoria:  inputs[4].value,
        detalles:   inputs[5].value,
        foto:       inputs[6].value,
        envio:      inputs[7].checked
    }
}

 // Limpiamos los imputs del formulario
 function limpiarFormulario() {
    inputs.forEach(input => {
        if (input.type != 'checkbox') input.value = ''
        else if(input.type == 'checkbox') input.checked = false
    })

    button.disabled = true
    camposValidos = [false, false, false, false, false, false, false]
  }




/* -------- INICIACIONES PARA EL FUNCIONAMIENTO DEL MÓDULO  -------- */

function initAlta(){
    console.warn('initAlta()')


}
