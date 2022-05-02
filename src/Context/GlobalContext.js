import React from "react";

const GlobalContext = React.createContext({
  idUsuario : 0,
  setIdUsuario: (id) => {},
  monthIndex: 0,
  setMonthIndex: (index) => {}, 
  dayIndex: 0,
  setDayIndex: (index) => {}, 
  opcionVista: 0,
  setOpcionvista: (index) => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index) => {},
  daySelected: null,
  setDaySelected: (day) => {}, 
  updateUsuario: () => {},
  usuarios: [],
  setUsuarios: () => {}, 
  ActividadesMes:[],
  setActividadesMes:() => {},
  filtrarActividades: ()=>{},
  colores: []
});

export default GlobalContext;
