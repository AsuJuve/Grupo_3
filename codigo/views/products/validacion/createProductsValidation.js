            let formulario = document.getElementById("formulario");

            formulario.addEventListener("submit", function(error) {
                const ulErrores = document.querySelector("div.errores ul");
                ulErrores.innerHTML= ""
                let errores = [];
                
                //Validación del campo del nombre

                const campoNombre = document.getElementById("nombreCurso");

                if (campoNombre.value == "") {
                    errores.push("Debe completar el campo de nombre");
                } else if (campoNombre.value.length < 5) {
                    errores.push("El campo de nombre debe tener almenos 5 caracteres");
                }

                //Validación del campo descripción corta
                const campoDescripcionCorta = document.getElementById("descripcionCorta");

                if (campoDescripcionCorta.value == "") {
                    errores.push("Debe completar el campo de descripción corta");
                } else if (campoDescripcionCorta.value.length < 20) {
                    errores.push("El campo de descripción corta debe tener almenos 20 caracteres");
                }

                //Validación del campo requisitos
                const campoRequisitos = document.getElementById("requisitos");

                if (campoRequisitos.value == "") {
                    errores.push("Debe completar el campo de requisitos");
                }

                //Validación del campo descripción larga
                const campoDescripcionLarga = document.getElementById("descripcionLarga");

                if (campoDescripcionLarga.value == "") {
                    errores.push("Debe completar el campo de descripción larga");
                } else if (campoDescripcionLarga.value.length < 20) {
                    errores.push("El campo de descripción larga debe tener almenos 20 caracteres");
                }

                //Validación del tipo del campo precio
                const campoPrecio = document.getElementById("precio");
                let valueInt = parseInt(campoPrecio.value)

                if (campoPrecio.value == "") {
                    errores.push("Debe completar el campo de precio");
                }else if (isNaN(valueInt)){
                    errores.push('El campo de precio solo debe contener numeros');
                }
                
                //Validación de la extensión de la imagen 
                const campoImagen = document.getElementById("imagenDelCurso");
                const extensionesValidas = ['jpg','jpeg','png','gif'];
                const extension = campoImagen.value.split('.').pop().toLowerCase() 
                console.log(extension)
                const validacion = extensionesValidas.includes(extension)

                if (campoImagen.value == "") {
                    errores.push("Debe subir una imagen");
                }else if (validacion != true){
                    errores.push('Solo se aceptan imagenes con extensión JPG, JPEG, PNG, GIF')
                }
                //Desplegar errores
                if (errores.length > 0) {
                    error.preventDefault();
                    for (let i = 0; i < errores.length; i++) {
                        ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
                    }
                    
                }
            })