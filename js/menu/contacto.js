
function initContacto(){
    console.warn('initContacto()')
    
    const formContacto = document.getElementById('formulario-contacto')
    console.log(formContacto)
    const inputsContacto = document.querySelectorAll('#formulario-contacto input')
    console.log(inputsContacto)
    
    const regExpValidarContacto = {
            nombre:     /^[a-zA-ZÀ-ÿ\s]{2,25}$/ ,                            // regexp nombre
            apellido:   /^[a-zA-ZÀ-ÿ\s]{2,25}$/,                             // regexp apellido
            email:      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,  // regexp email
            telefono:    /^\d{7,14}$/                                         // regexp telefono
    
    }

    const validarForm = (e) => {
        switch(e.target.name) {
            case 'nombre':
                validarCampo(regExpValidarContacto.nombre, e.target, 'nombre');
                break;
            case 'apellido':
                validarCampo(regExpValidarContacto.apellido, e.target, 'apellido');
            break;
            case 'email':
                validarCampo(regExpValidarContacto.email, e.target, 'email');
            break;
            case 'telefono':
                validarCampo(regExpValidarContacto.telefono, e.target, 'telefono');
            break;
        }
    } 

    const validarCampo = (expresion, input, campo) => {

        if(expresion.test(input.value)){

            console.log('ES VALIDO')
           /*  document.getElementById(`grupo__${campo}`).classList.remove('form-contacto__info-invalido')
            document.getElementById(`grupo__${campo}`).classList.add('form-contacto__info-valido') */
            
          } else{
              console.log('ES INVALIDO')
             /*  document.getElementById(`grupo__${campo}`).classList.add('form-contacto__info-invalido')
              document.getElementById(`grupo__${campo}`).classList.remove('form-contacto__info-valido')

              document.querySelector(`#grupo__${campo} .form-contacto__input-error'`).classList.add('form-contacto__input-error--activo') */
             
        }
    }
    inputsContacto.forEach((input)=> {
        input.addEventListener('keyup', validarForm)
        input.addEventListener('blur', validarForm)
        
    })
    formContacto.addEventListener('submit', (e) => {
        e.preventDefault();


    })

}