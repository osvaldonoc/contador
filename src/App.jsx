import React from "react";

import Texto from "./componentes/Texto";
import Contador from "./componentes/Contador";
import ListaNombres from "./componentes/ListaNombres";
import Pokemones from "./componentes/Pokemones";
import "./App.css"



const App = () => {
    return <div className="container">
        {/*<Texto nombre=' John ' apellido=' Perez' edad=' 50'/>
        <Contador/>
        <ListaNombres />*/}
        <Pokemones />
    </div>

}

export default App;