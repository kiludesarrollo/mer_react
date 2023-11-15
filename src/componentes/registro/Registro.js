import React, {useState,setState} from 'react';
import NavBar from "../navbar/NavBar";
import './Registro.css'

function Registro() {
    
    const [nombre, setNombre] = useState(null);
    const [apellido, setApellido] = useState(null);
    const [email, setEmail] = useState(null);
    const [telefono, setTelefono] = useState(null);
    const [usuario, setUsuario] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "nombre"){
            setNombre(value);
        }
        if(id === "apellido"){
            setApellido(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "telefono"){
            setTelefono(value);
        }
        if(id === "usuario"){
            const valor = nombre.value;
            if (valor === "") {
                document.getElementById("error_user").innerHTML = "Debe ingresar un nombre de usuario";
            } else {
                document.getElementById("error_user").innerHTML = "";setUsuario(valor);
            }
            
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit  = () => {
        console.log(nombre,apellido,email,telefono,password,confirmPassword);
    }

    return(
        <>
            <NavBar/>
            <h2>Registro de Usuario </h2>
            <div className="form">
                <div className="form-body">
                    <div className="username">
                        <label className="form__label" for="nombre"> Nombre *</label>
                        <input className="form__input" type="text" value={nombre} onChange = {(e) => handleInputChange(e)} id="nombre" />
                        <div classname="msg_error" id="error_nombre"></div>
                    </div>
                    <div className="lastname">
                        <label className="form__label" for="apellido">Apellido * </label>
                        <input  type="text" name="" id="apellido" value={apellido}  className="form__input" onChange = {(e) => handleInputChange(e)} />
                        <div classname="msg_error" id="error_apellido"></div>
                    </div>
                    <div className="phone">
                        <label className="form__label" for="telefono">Teléfono </label>
                        <input  type="text" name="" id="telefono" value={telefono}  className="form__input" onChange = {(e) => handleInputChange(e)} />
                    </div>
                    <div className="email">
                        <label className="form__label" for="email">Email </label>
                        <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="ejemplo@ejemplo.com"/>
                        <div classname="msg_error" id="error_email" ></div>
                    </div>
                    <div className="username">
                        <label className="form__label" for="usuario">Usuario </label>
                        <input className="form__input" type="text" value={usuario} onChange = {(e) => handleInputChange(e)} id="usuario" />
                        <div classname="msg_error" id="error_user"></div>
                    </div>

                    <div className="password">
                        <label className="form__label" for="password">Password </label>
                        <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                        <div classname="msg_error" id="error_passw"></div>
                    </div>
                    <div className="confirm-password">
                        <label className="form__label" for="confirmPassword">Confirm Password </label>
                        <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} />
                        <div classname="msg_error" id="error_confpass"></div>
                    </div>
                </div>
                <div class="footer">
                    <button onClick={()=>handleSubmit()} type="submit" class="btn">
                        Registrar
                        <div classname="msg_error" id="error_log" ></div>
                        </button>
                </div>
            </div>
        </>
    )       
    
}


export default Registro