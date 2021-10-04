window.addEventListener('load',() => {
    const form = document.getElementById("form-register");

    form.addEventListener("submit",(e) => {
        //Vaciamos los errores cada que se le da a Enviar
        const ulErrores = document.querySelector("div.errores ul");
        ulErrores.innerHTML= ""
        let errores = [];

        //Seleccionamos los inputs del formulario
        const campoNombre = document.getElementById("nombre");
        const campoApellido = document.getElementById("apellido");
        const campoCorreo = document.getElementById("correo");
        const campoContraseña = document.getElementById("password");
        const campoImagen = document.getElementById("imgUsuario");

        //Expresiones regulares para realizar algunas validaciones
        const formatoCorreo = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const formatoMayusculas = /[A-Z]/g;
        const formatoNumeros = /[0-9]/g;
        const formatoEspeciales = /[!@#$%^&*]/;

        //Validamos cada campo
        if(campoNombre.value == ""){
            errores.push("El campo de Nombre es obligatorio");
        }else if(campoNombre.value.length < 2){
            errores.push("El campo de Nombre debe tener más de un caractér");
        }

        if(campoApellido.value == ""){
            errores.push("El campo de Apellido es obligatorio");
        }else if(campoApellido.value.length < 2){
            errores.push("El campo de Apellido debe tener más de un caractér");
        }

        if(campoCorreo.value == ""){
            errores.push("El campo de Correo es obligatorio");
        }else if(!campoCorreo.value.match(formatoCorreo)){
            errores.push("El campo Correo en el campo de Correo debe ser válido");
        }

        if(campoContraseña.value == ""){
            errores.push("El campo de Contraseña es obligatorio");
        }else if(campoContraseña.value.length < 8){
            errores.push("El campo de Contraseña debe tener más de 7 caractéres");
        }else if(!campoContraseña.value.match(formatoMayusculas)){
            errores.push("El campo de Contraseña debe contener por lo menos una mayúscula");
        }else if(!campoContraseña.value.match(formatoNumeros)){
            errores.push("El campo de Contraseña debe contener por lo menos un número");
        }else if(!campoContraseña.value.match(formatoEspeciales)){
            errores.push("El campo de Contraseña debe contener por lo menos un caractér especial");
        }

        const extensionImagen = campoImagen.value.split(".").pop();
        const extensionesValidas = ["jpg","jpeg","png","gif"];
        if(campoImagen.value != "" && !(extensionesValidas.includes(extensionImagen))){
            errores.push("Extensión de imagen no válida. Las extensiones válidas son: JPG, JPEG, PNG, GIF.");
        }

        //SI hay errores, el formulario no se manda, y se muestran los errores
        if(errores.length > 0){
            e.preventDefault();

            for(let i = 0; i < errores.length; i++){
                ulErrores.innerHTML += "<li>" + errores[i] + "<li>";
            }
        }
    })
})