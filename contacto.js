
// const $form = document.querySelector('#form')

// $form.addEventListener('submit', handleSubmit)

// async function handleSubmit(Event){
//     Event.preventDefault()
//     const form = new FormData(this)   
//     const response = await fetch(this.action, {
//         method: this.method,
//         body: form,
//         headers: {
//             'Accept': 'application/json'
//         }
//     })
//     if(response.ok){
//         this.reset()
//         alert("Gracias por contactarte")

//     }
// }




document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('botonEnvio').addEventListener('click', function (event) {
         event.preventDefault(); // Evitar el envío del formulario por defecto

        // Obtener los valores de los campos del formulario
         const nombre = document.getElementById('inputName').value.trim();
        const motivo = document.getElementById('inputOption').value.trim();
        const contacto = document.getElementById('inputContact').value.trim();
        const mensaje = document.getElementById('floatingTextarea2').value.trim();

       // Validar que todos los campos obligatorios estén completos
         if (!nombre || motivo === "" || !contacto || !mensaje) {
            document.getElementById('mensajeGeneral').textContent = "Por favor, complete todos los campos obligatorios.";
            document.getElementById('mensajeGeneral').classList.remove('mensaje-exito');
             document.getElementById('mensajeGeneral').classList.add('mensaje-error');
             return; // Detener el envío del formulario si hay campos vacíos
         }

        // Deshabilitar el botón y mostrar estado de "procesando"
       const botonEnvio = document.getElementById('botonEnvio');
         botonEnvio.disabled = true;
         botonEnvio.textContent = 'Procesando...';

         // Preparar el objeto de formulario para enviar
         const form = new FormData();
         form.append('Nombre', nombre);
         form.append('Contacto', contacto);
         form.append('Mensaje', mensaje);{
        }

        // Enviar el formulario usando Formspree
        fetch("https://formspree.io/f/xdkkoawk", {
             method: 'POST',
             body: form,
             headers: {
                'Accept': 'application/json'
            }
         })
             .then(response => {
                 if (!response.ok) {
                    throw new Error('Error en la solicitud de envío del formulario');
                }
                 return response.json();
             })
             .then(data => {
                 // Restaurar el estado del botón y mostrar mensaje de éxito
                 botonEnvio.textContent = 'Enviar';
                 botonEnvio.disabled = false;
                 console.log('Formulario enviado exitosamente:', data);
                document.getElementById('mensajeGeneral').textContent = "El formulario se envió correctamente.";
                 document.getElementById('mensajeGeneral').classList.remove('mensaje-error');
                document.getElementById('mensajeGeneral').classList.add('mensaje-exito');
                 document.getElementById('form').reset(); // Limpiar el formulario después del envío
            })
            .catch(error => {
                 // Restaurar el estado del botón y mostrar mensaje de error
                 botonEnvio.textContent = 'Enviar';
                 botonEnvio.disabled = false;
                 console.error('Error al enviar el formulario:', error);
                 document.getElementById('mensajeGeneral').textContent = "Hubo un problema al enviar el formulario. Por favor, intenta nuevamente más tarde.";
                 document.getElementById('mensajeGeneral').classList.remove('mensaje-exito');
                 document.getElementById('mensajeGeneral').classList.add('mensaje-error');
            });
     });
 });
