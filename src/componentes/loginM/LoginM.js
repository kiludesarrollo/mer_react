import React from "react";
import NavBar from "../navbar/NavBar";
import './LoginM.css';


function LoginM(){
    return(
   
        <>
            <NavBar/>
            <h2>Login Maquetado</h2>
            <h4>(sólo a los fines de mostrar el formato de pantalla)</h4>
          
            <form action="" name="form_login" onsubmit="registrarse(); return false;">

                <div classname="logEscrito">
                    <label for="usuario">Usuario </label>
                    <input type="text" id="usuario" name="usuario" className="log-input-field" /> 
                    <div classname="msg_error" id="error_user"></div>
                </div>

                <div classname="logEscrito">
                    <label for="contrasenia">Contraseña </label>
                    <input type="password" id="contrasenia" name="contrasenia" classname="log-input-field" />
                    <div classname="msg_error" id="error_passw" ></div>
                </div>

                <button type="submit" classname="boton">Ingresar</button>
            </form>
            
            <div id="mensaje"></div>


            <script src="logscripts.js"></script>



        </>
    )
}

export default LoginM;