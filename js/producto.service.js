const URL_PRODUCTOS = 'https://633eca1d83f50e9ba3b84b17.mockapi.io/productos'

async function obtenerProductosService() {
    let productos = await get(URL_PRODUCTOS)
    console.log(productos)
    return productos
}

obtenerProductosService()

/* POST */

async function post(url, dato){
    try {
        const respuesta = await fetch(url, {
            method: 'post',
            body: JSON.stringify(dato),
            headers:{'content-type': 'application/json'}
        })

        const resultado = await respuesta.json()
        return resultado
    } catch (error) {
        console.error('ERROR POST', error)
    }
}

/* PUT */
async function put(url, id, dato){
    try {
        const respuesta = await fetch(url + id, {
            method: 'put',
            body: JSON.stringify(dato),
            headers:{'content-type': 'application/json'}
        })

        const resultado = await respuesta.json()
        return resultado
    } catch (error) {
        console.error('ERROR PUT', error)
    }
}

/*DELETE */

async function DEL(url, id){
    try {
        const respuesta = await fetch(url + id, {
            method: 'delete'
        })

        const resultado = await respuesta.json()

        return resultado
    } catch (error) {
        console.error('ERROR DELETE', error)
    }
}
