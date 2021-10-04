window.addEventListener('load',() => {
    const form = document.querySelector("form");

    let errores = [];

    form.addEventListener('submit',(e) => {
        const nombre = document.querySelector("input#nombre");
        const apellido = document.querySelector("input#apellido");
        const correo = document.querySelector("input#correo");
        const password = document.querySelector("input#password");
        const imagen = document.querySelector("input#imgUsuario");

        if(nombre.value == ""){
            errores.push("El campo de Nombre es obligatorio");
        }else if(nombre.value.length < 2){
            errores.push("El campo de Nombre debe tener más de dos caractéres");
        }

        if(apellido.value == ""){
            errores.push("El campo de Apellido es obligatorio");
        }else if(apellido.value.length < 2){
            errores.push("El campo de Apellido debe tener más de dos caractéres");
        }
    })
})