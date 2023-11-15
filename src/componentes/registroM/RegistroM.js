import React from "react";
import NavBar from "../navbar/NavBar";

function Registro() {
    return (
   
        <>
            <NavBar/>
            <h2> Registro de Usuario </h2>
            <h4>(sólo a los fines de mostrar el formato de pantalla)</h4>

            <form action="" name="form_registro" onsubmit="registrarse(); return false;">

                <div classname="labelEscrito">
                    <label for="nombre">Nombre *</label>
                    <input type="text" id="nombre" name="nombre" className="input-field" /> 
                    <div classname="msg_error" id="error_nombre"></div>
                </div>

                <div classname="labelEscrito">
                    <label for="apellido">Apellido *</label>
                    <input type="text" id="apellido" name="apellido" classname="input-field" />
                    <div classname="msg_error" id="error_apellido" ></div>
                </div>

                <div classname="labelEscrito">
                    <label for="telefono">Teléfono</label>
                    <input type="text" id="telefono" name="telefono" classname="input-field" />
                </div>
                
                <div classname="labelEscrito">
                    <label for="email">Email *</label>
                    <input type="text" id="email" placeholder="ejemplo@ejemplo.com" name="email" classname="input-field" />
                    <div classname="msg_error" id="error_email" ></div>
                </div>

                <div classname="labelEscrito">
                    <label for="usuario">Usuario *</label>
                    <input type="text" id="usuario" name="usuario" className="input-field" /> 
                    <div classname="msg_error" id="error_user"></div>
                </div>

                <div classname="labelEscrito">
                    <label for="contrasenia">Contraseña *</label>
                    <input type="password" id="contrasenia" name="contrasenia" classname="input-field" />
                    <div classname="msg_error" id="error_passw" ></div>
                </div>

                <div classname="labelEscrito">
                    <label for="verifpass">Reingrese Contraseña *</label>
                    <input type="password" id="verifpass" name="verifpass2" classname="input-field" />
                    <div classname="msg_error" id="error_veripassw" ></div>
                </div>
                
                <div id="oblig">
                    <p> (*) campos obligatorios</p>
                </div>

                <button type="submit" classname="boton">Enviar</button>
            </form>
            
            <div id="mensaje"></div>


            <script src="regscripts.js"></script>


        </>
    )
}

export default Registro;
