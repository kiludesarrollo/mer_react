
const getMensaje = ()=>{
    const http = new XMLHttpRequest()
    http.onreadystatechange = ()=>{
        console.log("onreadystatechange")
        console.log(http.readyState) 
        console.log(http.status) 
    
        if(http.readyState===4 && http.status===200){
            document.getElementById("mensaje").innerHTML = http.responseText
        }
    }
    //Request (Solicitud)
    http.open('GET', 'http://localhost/tp2_ma_0780/contacto.txt', true)
    http.send()
}

// getMensaje()
const registrarse = () => {
    const nombre = document.getElementById("nombre").value.trim();//document.form_registro.nombre.value.trim();
    const apellido = document.form_registro.apellido.value.trim();
    const email = document.getElementById("email").value.trim();
    const tcontacto = document.form_registro.tcontacto.value;
    const asunto = document.form_registro.asunto.value.trim();
    const descripcion = document.form_registro.descripcion.value.trim();
        
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

    if (tcontacto === ""){
        document.getElementById("error_tcontacto").innerHTML = "Debe indicar un tipo de contacto";
    } else {
        document.getElementById("error_tcontacto").innerHTML = "";
    }

    if (asunto === "") {
        document.getElementById("error_asunto").innerHTML = "Debe indicar un asunto";
    } else {
        document.getElementById("error_asunto").innerHTML = "";
    }

    if (descripcion === "") {
        document.getElementById("error_descripcion").innerHTML = "Debe incluir una descripción";
    } else {
        document.getElementById("error_descripcion").innerHTML = "";
    }

    // Todos los datos están completos.
    if (nombre !== "" && apellido !== "" && email !== "" && tcontacto !== "" && asunto !== "" && descripcion !== "") {
        getMensaje();
    }

    console.log(nombre, apellido, email, tcontacto, asunto, descripcion);
}

