import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../navbar/NavBar";

function DetalleProducto() {
    const { id } = useParams();
    const [cargando, setCargando] = useState(true);
    const [producto, setProducto] = useState({});

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(data => {
            setProducto(data);
            setCargando(false);
        })
        .catch(error => {
            console.error(error);
            setCargando(false);
            });
    }, [id]);

    if (cargando) {
        return <div>Cargando...</div>;
    } else {
        return (
        <div>
            <NavBar />  
            <div>
                <div className="Titulo">
                    <h3>{producto.title}</h3>
                </div>
                <p>Cod: {producto.id}</p>
                <p>************</p>
                <p>Precio: ${producto.price}</p>
                <p>Stock: {producto.rating.count}</p>
                <p>Categoría: {producto.category}</p>
                <p>Descripción: {producto.description}</p>
                <div className="Imagen">
                    <img src={producto.image} alt="Producto"/>
                </div>
            </div>
        </div>
        );
    }
    }

    export default DetalleProducto;
