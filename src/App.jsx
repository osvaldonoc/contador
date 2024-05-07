import React from "react";
import Referencia from "./componentes/Referencia";
import Texto from "./componentes/Texto";
import Contador from "./componentes/Contador";
import ListaNombres from "./componentes/ListaNombres";
import Pokemones from "./componentes/Pokemones";
import "./App.css"



const App = () => {
    return <div className="container">
        {/*<Texto nombre=' John ' apellido=' Perez' edad=' 50'/>
        <hr />
        <Contador/>
        <hr />
        <ListaNombres />
<hr />*/}
        <Pokemones />
        {/*<hr />
        <Referencia />*/}
    </div>

}

export default App;