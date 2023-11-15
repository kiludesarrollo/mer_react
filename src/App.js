import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Catalogo from "./componentes/catalogo/Catalogo";
import Registro from "./componentes/registro/Registro";
import RegistroM from "./componentes/registroM/RegistroM";
import QuienesSomos from "./componentes/quienessomos/QuienesSomos"
import DetalleProducto from "./componentes/detalleproducto/DetalleProducto";
import LoginM from "./componentes/loginM/LoginM";
import Login from "./componentes/login/Login";

function App() {
  return (
    <>

      <h1>Tienda Mercedes</h1>
      <BrowserRouter basename="/mer_react">
        <Routes>
        <Route path="/" element={<Catalogo />} />
        <Route path="/detalleProducto/:id" element={<DetalleProducto />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/registroM" element={<RegistroM />} />
        <Route path="/loginM" element={<LoginM />} />
        <Route path="/login" element={<Login />} />
        <Route path="/QuienesSomos" element={<QuienesSomos />} />
                
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
