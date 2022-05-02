import React from "react";
import MiniCalendario from "./MiniCalendario";
import BarraBusquedaUsu from "./BarraBusquedaUsu";
import Usuarios from './Usuarios'

export default function Sidebar() {
  return (
    <aside className="border p-5 w-64">   
     
      <MiniCalendario />     
      <BarraBusquedaUsu />    
      <Usuarios/> 
    </aside>
  );
}
