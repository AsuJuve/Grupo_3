window.addEventListener('load',() => {
    const form = document.getElementById("form-login");

    form.addEventListener("submit",(e) => {
        //Vaciamos los errores cada que se le da a Enviar
        const ulErrores = document.querySelector("div.errores ul");
        ulErrores.innerHTML= ""
        let errores = [];

        //Seleccionamos los inputs
        const campoCorreo = document.getElementById("correo");
        const campoContraseña = document.getElementById("contra");

        const formatoCorreo = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        //Validamos cada campo
        if(campoCorreo.value == ""){
            errores.push("El campo de Correo es obligatorio");
        }else if(!campoCorreo.value.match(formatoCorreo)){
            errores.push("El campoCorreo en el campo de Correo debe ser válido");
        }

        if(campoContraseña.value == ""){
            errores.push("El campo de Contraseña es obligatorio");
        }

        //Si hay errores, el formulario no se manda, y se muestran los errores
        if(errores.length > 0){
            e.preventDefault();

            for(let i = 0; i < errores.length; i++){
                ulErrores.innerHTML += "<li>" + errores[i] + "<li>";
            }
        }
    })
})