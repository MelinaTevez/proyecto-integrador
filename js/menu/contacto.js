
/*     regExpValidarContacto = [
         /^[a-zA-ZÀ-ÿ\s]{1,40}$/ ,    // regexp nombre
         /^[a-zA-ZÀ-ÿ\s]{1,40}$/,      // regexp apellido
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,  // regexp email
         /^\d{7,14}$/     // regexp telefono

 */
function initContacto(){
    console.warn('initContacto()')

    const inputName = document.getElementById('nombre-contacto')
    const inputApellido = document.getElementById('apellido')
    const inputEmail = document.getElementById('email')
    const inputTelefono = document.getElementById('telefono')
    const formContacto = document.getElementsByClassName('form-contacto')
    const pWarning = document.getElementsByClassName('form-contacto__warning')

/* 
    console.log(inputName, inputApellido, inputEmail, inputTelefono) */
/*     formContacto.addEventLister('submit', e => {
        e.preventDefault()

      
    })
} */
}