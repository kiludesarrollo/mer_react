
const getMensaje = ()=>{
    const http = new XMLHttpRequest()
    http.onreadystatechange = ()=>{
        console.log("onreadystatechange")
        console.log(http.readyState) 
        console.log(http.status) 
    
        if(http.readyState==4 && http.status==200){
            document.getElementById("mensaje").innerHTML = http.responseText
        }
    }
    //Request (Solicitud)
    http.open('GET', 'http://localhost/tp2_ma_0780/contacto.txt', true)
    http.send()
}

// getMensaje()
const registrarse = () => {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.form_registro.apellido.value.trim();
    const email = document.getElementById("email").value.trim();
    const tcontacto = document.form_registro.tcontacto.value;
    const asunto = document.form_registro.asunto.value.trim();
    const descripcion = document.form_registro.descripcion.value.trim();
    
    if (usuario === "") {
        document.getElementById("error_user").innerHTML = "Debe ingresar un nombre de usuario";
    } else {
        document.getElementById("error_user").innerHTML = "";
    }

    if (nombre === "") {
        document.getElementById("error_nombre").innerHTML = "Debe indicar su nombre";
    } else {
        document.getElementById("error_nombre").innerHTML = "";
    }

    if (apellido === "") {
        document.getElementById("error_apellido").innerHTML = "Debe indicar su apellido";
    } else {
        document.getElementById("error_apellido").innerHTML = "";
    }
    
    if (email === "") {
        document.getElementById("error_email").innerHTML = "Debe indicar un correo electrónico";
    } else {
        document.getElementById("error_email").innerHTML = "";
    }

    if (contrasenia === "") {
        document.getElementById("error_passw").innerHTML = "Debe ingresar una contraseña";
    } else {
        document.getElementById("error_passw").innerHTML = "";
    }

    if (verifpass === "") {
        document.getElementById("error_passw").innerHTML = "Debe reingresar la contraseña seleccionada";
    } else {
        document.getElementById("error_veripassw").innerHTML = "";
    }

    if (contrasenia !== verifpass) {
        document.getElementById("error_passw").innerHTML = "Las contraseñas ingresadas no concuerdan entre sí";
    } else {
        document.getElementById("error_veripassw").innerHTML = "";
    }

    

    // Todos los datos están completos.
    if (usuario !== "" && nombre !== "" && apellido !== "" && email !== "" && contrasenia !== "" && contrasenia === verifpass) {
        getMensaje();
    }

    console.log(nombre, apellido, email, );
}

