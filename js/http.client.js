/* GET */

async function get(url, id){
    try {
        const respuesta = await fetch(url + (id || ''), {method: 'get'})
        console.log(respuesta)
        const resultado = await respuesta.json()
        console.log(resultado)
        return resultado

    } catch (error) {
        console.error('ERROR GET', error)
    }
}

