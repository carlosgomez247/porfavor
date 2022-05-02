import React, { useState, useEffect, useMemo } from 'react';
import GlobalContext from './GlobalContext';
import dayjs from 'dayjs';

export default function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().locale('es').month());
  const [dayIndex, setDayIndex] = useState(dayjs().locale('es').$D);
  const [opcionVista, setOpcionVista] = useState(1);

  const [idUsuario, setIdUsuario] = useState(0);
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [usuarios, setUsuarios] = useState([]);
  const [ActividadesMes, setActividadesMes] = useState([]);
  const [colores, setColores] = useState([
    'pink-500',
    'red-500',
    'purple-600',
    'deep-purple-600',
    'indigo-600',
    'blue-600',
    'cyan-600',
    'teal-600',
    'green-600',
    'lime-600',
    'yellow-600',
    'orange-600',
    'brown-500',
    'grey-500',
    'blue-grey-600',
  ]);

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);

  const filtrarActividades = useMemo(() => {
    return ActividadesMes
      ? ActividadesMes.filter((evt) =>
          usuarios
            .filter((lbl) => lbl.checked)
            .map((lbl) => lbl.id)
            .includes(evt.TERCERECURSOCTROLID)
        )
      : [];
  }, [ActividadesMes, usuarios]);

  function updateUsuario(usu) {
    setUsuarios(usuarios.map((lbl) => (lbl.id === usu.id ? usu : lbl)));
  }

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        dayIndex,
        setDayIndex,
        smallCalendarMonth,
        setSmallCalendarMonth,
        daySelected,
        setDaySelected,
        idUsuario,
        setIdUsuario,
        usuarios,
        setUsuarios,
        updateUsuario,
        ActividadesMes,
        setActividadesMes,
        filtrarActividades,
        setOpcionVista,
        opcionVista,
        colores,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
