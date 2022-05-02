import React, { useState, useEffect, useContext } from 'react';
import { getDay, getMonth } from './Util/Util';
import Mes from './Components/Mes';
import Dia from './Components/Dia';
import Sidebar from './Components/Sidebar';
import EncabezadoCalendario from './Components/EncabezadoCalendario';
import GlobalContext from './Context/GlobalContext';
import axios from 'axios';
import dayjs from 'dayjs';
import DetalleDia from './Components/DetalleDia';
let actividades = require('./Const/Actividades');
let usuario = require('./Const/Usuario');

function App() {
  console.log('APP');
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  //console.log(currenMonth)
  const {
    dayIndex,
    monthIndex,
    setIdUsuario,
    setUsuarios,
    setActividadesMes,
    usuarios,
    opcionVista,
    daySelected,
    colores,
  } = useContext(GlobalContext);

  // useEffect(() => {
  //     setIdUsuario(5)
  //     setUsuarios(usuario)
  //     setActividadesMes(actividades)
  //     console.log(actividades)
  //     setCurrentMonth(getMonth(monthIndex));
  //     //let arrIds = usuarios.map(x => x.id)
  // }, [monthIndex])

  useEffect(() => {
    console.log('USUARIO LOGIN');
    // axios
    //   .get('http://localhost:3003/usuario')
    //   .then((res) => {
    //     if (res.status === 200) {
    //       if (res.data.d !== undefined) {
    //         setIdUsuario(res.data.d.id);
    //         setUsuarios([
    //           {
    //             id: res.data.d.id,
    //             nombre: res.data.d.nombre,
    //             checked: true,
    //             num: 0,
    //           },
    //         ]);
    //         //console.log(res.data.d);
    //         console.log(usuarios);
    //       }
    //     }
    //   })
    //   .catch((error) => {});
    setIdUsuario(2041);
    setUsuarios(usuario);
  }, [setIdUsuario, setUsuarios]);

  useEffect(() => {
    //console.log('ACTIVIDADES QUERY');
    setCurrentMonth(getMonth(monthIndex));
    // let arrIds = usuarios.map(x => x.id)
    // axios
    //   .get('http://localhost:3003/actividades')
    //   .then((res) => {
    //     if (res.status === 200) {
    //       if (res.data.d !== undefined) {
    //         console.log(res.data.d);
    //         setActividadesMes(res.data.d);
    //         //console.log(res.data.d);
    //       }
    //     }
    //   })
    //   .catch((error) => {});

    setActividadesMes(actividades);
    setCurrentMonth(getMonth(monthIndex));
    //   console.log(actividades)
  }, [dayIndex, monthIndex, setActividadesMes, usuarios, opcionVista]);

  return (
    <React.Fragment>
      <div className='h-screen flex flex-col'>
        <EncabezadoCalendario />
        <div className='flex flex-1'>
          <Sidebar />

          {opcionVista == 1 ? (
            <Mes mes={currenMonth} />
          ) : (
            usuarios
              .filter((lbl) => lbl.checked)
              .map((x) => (
                <React.Fragment>
                  <div className={`bg-${colores[x.num]}`}>{x.nombre}</div>
                  <div className='flex-1 grid grid-cols-1 grid-rows-24'>
                    <Dia day={daySelected} key={1} rowIdx={1} idUsuDia={x.id} />
                  </div>
                </React.Fragment>
              ))
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
export default App;
