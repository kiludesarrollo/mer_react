import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'; 

function NavBar(){
    return(
        <nav className="navegacion">
            <Link to="/"> Catálogo de Productos </Link> 
            <Link to="/quienessomos"> Quiénes Somos </Link> 
            <Link to="/registro"> Registro </Link> 
            <Link to="/registroM"> Registro maquetado </Link> 
            <Link to="/login"> Login </Link> 
            <Link to="/loginM"> Login maquetado</Link>
                    </nav>
    )
}

export default NavBar;