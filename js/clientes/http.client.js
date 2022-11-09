/* GET */

async function get(url, id){
    try {
        const respuesta = await fetch(url + (id || ''), {method: 'get'})
       /*  console.log(respuesta) */
        const resultado = await respuesta.json()
       /*  console.log(resultado) */
        return resultado

    } catch (error) {
        console.error('ERROR GET', error)
    }
}


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

async function del(url, id){
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