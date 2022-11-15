
/*     regExpValidarContacto = [
        /^.,+$/ ,    // regexp nombre
        /^.,+$/,      // regexp apellido
        /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/,  // regexp email
        /^[0-9]+$/,      // regexp telefono

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
    formContacto.addEventLister('submit', e => {
        e.preventDefault()

      
    })
}