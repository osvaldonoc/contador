import React from "react";
import Referencia from "./componentes/Referencia";
import Texto from "./componentes/Texto";
import Contador from "./componentes/Contador";
import ListaNombres from "./componentes/ListaNombres";
import Pokemones from "./componentes/Pokemones";
import "./App.css"
import Estilos from "./componentes/Estilos";
import NavBarBootstrap from "./componentes/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
    return <div className="container">
        <NavBarBootstrap />
        <hr />
        <Texto nombre=' John ' apellido=' Perez' edad=' 50'/>
        <hr />
        <Contador/>
        <hr />
        <ListaNombres />
        <hr />
        <Pokemones />
        <hr />
        <Referencia />
        <hr />      
        <Estilos />
        <hr />
        
            
    </div>

}

export default App;