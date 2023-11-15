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

const ingresar = () => {
    const usuario = document.getElementById("usuario").value.trim();
    const contrasenia = document.form_registro.contrasenia.value.trim();
        
    if (usuario === "") {
        document.getElementById("error_user").innerHTML = "Debe ingresar un nombre de usuario";
    } else {
        document.getElementById("error_user").innerHTML = "";
    }

    if (contrasenia === "") {
        document.getElementById("error_passw").innerHTML = "Debe ingresar la contraseña";
    } else {
        document.getElementById("error_passw").innerHTML = "";
    }
    
    // Todos los datos están completos.
    if (usuario !== "" && contrasenia !== "" ) {
        getMensaje();
    }

    console.log(usuario, contrasenia );
}

