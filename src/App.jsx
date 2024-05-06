import React from "react";
import "./componentes/css/Estilo.css";
import Texto from "./componentes/Texto";
import Contador from "./componentes/Contador";
import ListaNombres from "./componentes/ListaNombres";


const App = () => {
    return <div className="container">
        {/*<Texto nombre=' John ' apellido=' Perez' edad=' 50'/>
        <Contador/>*/}
        <ListaNombres />
    </div>
}

export default App;