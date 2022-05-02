import React, { useState, useContext } from 'react';
import axios from 'axios';
import GlobalContext from '../Context/GlobalContext';
import {debounce} from '../Util/Util'
import Spinner from '../Components/Spinner'

let usuariosBusqueda = require('../Const/Usuarios');

export default function BarraBusquedaUsu() {
  //const [textoBusqueda,setTextoBusqueda] = useState('')
  const [listaCoincidencias, setListaCoincidencias] = useState([]);
  const { setUsuarios, usuarios } = useContext(GlobalContext);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(false);
  const [textoBusqueda, setTextoBusqueda] = useState('');

  function AgregarUsuario(obj) {
    console.log('AGREGAR USUARIO');
    if(usuarios.length <15){
      setUsuarios((prevState) => {
        return [
          ...prevState.filter((item) => item.id !== obj.TERCEID_USU),
          {
            id: obj.TERCEID_USU,
            nombre: obj.NOMCOMPL_USU,
            checked: true,
            num: usuarios.length,
          },
        ];
      });
    }
    setListaCoincidencias([]);
    setTextoBusqueda('');
    document.querySelector('#txtBusqueda').focus()
  }

  const test = (e) =>{
    setTextoBusqueda(e.target.value)
    buscaUsuarios(e)
  }

  const buscaUsuarios = React.useMemo(
    () => debounce((e) => {
      //setTextoBusqueda(e.target.value);   
      console.log(e.target.value)
     if (e.target.value !== '') {    
      setListaCoincidencias(usuariosBusqueda)
      // setCargando(true);
      // axios
      //   //.post(
      //   .get(
      //     'http://localhost:3003/usuarios',
      //     'frmCalendarioV2.aspx/ObtenerLisUsuariosxFiltro',
      //     { prefixText: e.target.value },
      //     {
      //       headers: { 'Content-Type': 'application/json' },
      //     }
      //   )
      //   .then((res) => {
      //     console.log(res);
      //     if (res.status === 200) {
      //       if (res.data.d !== undefined) {
      //         console.log(res.data.d);
      //         setListaCoincidencias(res.data.d)
      //         //document.querySelector('#txtBusqueda').value = e.target.value;
      //       }
      //     }
      //   })
      //   .catch(() => {
      //     setError(true);
      //   })
      //   .then(() => {
      //     setCargando(false);
      //   });
    } 
    else {
      setListaCoincidencias([]);
    }
    }, 250),
    []
  );

  // if (cargando) {
  //   return <Spinner />;
  // }
  // if (error) {
  //   return <div>Ha ocurrido un error</div>;
  // }

  return (
    <React.Fragment>
      <input
        type='text'
        id='txtBusqueda'
        onChange={test}
        placeholder='  &#xf0c0;  Buscar usuarios'
        style={{ fontFamily: 'FontAwesome' }}
        className='pt-2 border-0 text-black-200 text-l pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500  '
      />
      <ul className='suggestions'>
        {listaCoincidencias.map((row, i) => (
          <React.Fragment key={i}>
            <li className='' onClick={() => AgregarUsuario(row)}>
              {row.NOMCOMPL_USU}
            </li>
          </React.Fragment>
        ))}
      </ul>
      {/* <ListaUsuarios lis = {ListaCoincidencias} /> */}
    </React.Fragment>
  );
}
