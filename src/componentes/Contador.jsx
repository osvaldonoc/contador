import React from "react";
import { useState } from "react";

const Contador = () => {

    const [contador, setContador]= useState(0);

    return <div>
        <p>Clickeaste {contador} veces</p>
        <button onClick={ ()=>{setContador( contador + 1)}}>Aumentar</button>
        <button onClick={ ()=>{setContador( 0)}}>Reestablecer</button>
        <button onClick={ ()=>{setContador( contador - 1)}}>Disminuir</button>
        
    </div>
}

export default Contador;