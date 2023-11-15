import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import NavBar from "../navbar/NavBar";
import './Catalogo.css';

function Catalogo() {
    //Declaración de estados locales
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);

    //Utilizamos el efecto de UsseEffect para cargar los datos de productos desde la API
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
// Actualiza el estado productos con los datos obtenidos y establece loading en falso

            setProductos(data);
            setCargando(false);
        })
        .catch(error => {
            console.error(error);
            setCargando(false);
        });
    }, []);

    return (
        <div>
            <NavBar />
            <h2>Catálogo de Productos</h2>
            
            
            {cargando ? (
                <p>Cargando productos...</p>
            ) : (
                <ul className="productos-lista">
                {productos.map(producto => (
                    <li key={producto.id} className="producto-item">
                    <h3>{producto.title}</h3>
                    <p>Precio: ${producto.price}</p>
                    <Link to={`/DetalleProducto/${producto.id}`}>Detalle</Link>
                    </li>
                ))}
                </ul>
            )}
        </div>
    );
    }

    export default Catalogo;