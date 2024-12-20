  
    //   VALIDACION DE FORMULARIO DE REGISTRO

const nombre = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const miFormulario = document.getElementById("miFormulario");
const parrafo = document.getElementById("warnings");

miFormulario.addEventListener("submit", e=> {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
if(nombre.value.length <6){
    warnings += "El nombre no es válido <br>"
    entrar = true
}

   if(!regexEmail.test(email.value)){
        warnings += "El email no es válido <br>"   
        entrar = true
   }
   if(password.value.length <8){
        warnings += "El contraseña no es válida <br>"   
        entrar = true
   }

   if(entrar){
    parrafo.innerHTML =warnings

   }else{
    parrafo.innerHTML = "REGISTRO EXITOSO!!!! 🤗"

   }


})






// document.getElementById("btnEnviarReg").addEventListener("click", function() {
//     window.location.href = "http://127.0.0.1:3000/MiBlog/datosRegistro.html";
// });





