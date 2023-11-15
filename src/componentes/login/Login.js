import React, {useState,setState} from 'react';
import NavBar from "../navbar/NavBar";
import './Login.css'

function Login() {
    
    const [usuario, setUsuario] = useState(null);
    const [contrasenia,setPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "usuario"){
            if (usuario === "") {
                document.getElementById("error_user").innerHTML = "Debe ingresar un nombre de usuario";
            } else {
                document.getElementById("error_user").innerHTML = "";setUsuario(value);
            }
            
        }
        if(id === "contrasenia"){
            setPassword(value);
        }
    }

    const handleSubmit  = () => {
        if (usuario === "" || contrasenia === "") {
            document.getElementById("error_log").innerHTML = "Faltan datos. Por favor, verifique";
        } else {
            document.getElementById("error_log").innerHTML = "";
        }
        console.log(usuario,contrasenia);
    }

    return(
        <>
            <NavBar/>
            <h2>Login </h2>
            <div className='form' >
                <div >
                    <div className="username">
                        <label className="form__label" for="usuario">Usuario </label>
                        <input className="form__input" type="text" value={usuario} onChange = {(e) => handleInputChange(e)} id="usuario" />
                        <div classname="msg_error" id="error_user"></div>
                    </div>
                    
                    <div className="password">
                        <label className="form__label" for="contrasenia">Contraseña </label>
                        <input className="form__input" type="password"  id="contrasenia" value={contrasenia} onChange = {(e) => handleInputChange(e)} />
                        <div classname="msg_error" id="error_passw" ></div>
                    </div>
                    
                </div>
                <div classname="footer">
                    <button onClick={()=>handleSubmit()} type="submit" classname="btn">
                        Ingresar
                        <div classname="msg_error" id="error_log" ></div>
                        </button>
                </div>
            </div>
        </>
    )       
}

export default Login