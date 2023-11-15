import React from "react";
import NavBar from "../navbar/NavBar";
import './Contacto.css';
import './scripts';

function Contacto(){
    return(
   
        <>
        <NavBar/>
        <h1> Formulario de Contacto </h1>

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

            <div >
                <div classname="labelradio">
                    Tipo de contacto
                </div>
                <div classname="radiobutton">
                    <label for="soporte">Soporte
                        <input type="radio" id="soporte" name="tcontacto" value="soporte"/>
                    </label>
                    <label for="ventas">Ventas 
                        <input type="radio" id="ventas" name="tcontacto" value="ventas"/>
                    </label>
                </div>
                <div classname="msg_error" id="error_tcontacto" ></div>
            </div>

            <div classname="labelEscrito">
                <div>
                    <label for="asunto">Asunto *</label>
                    <input type="text" id="asunto" name="asunto" classname="input-field" /> 
                </div>
                <div classname="msg_error" id="error_asunto" ></div>
            </div>

            <div classname="labelEscrito">
                <label for="descripcion">Descripción *</label>
                <textarea type="textarea" id="descripcion" name="descripcion" classname="text-field"></textarea>
                <div classname="msg_error" id="error_descripcion"></div>
            </div>

            <div id="oblig">
                <p> (*) campos obligatorios</p>
            </div>

            <button type="submit" classname="boton">Enviar</button>
        </form>
        
        <div id="mensaje"></div>


        <script src="scripts.js"></script>


    </>
    )
}

export default Contacto;
