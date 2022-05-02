import React from 'react';

const RecursosInvolucrados = ({ evt, colores, usuarios }) => {
  console.log(evt);
  function ObtenerColorUsuario(id) {
    let indiceColor = 0;
    for (let index = 0; index < usuarios.length; index++) {
      if (usuarios.id === id) {
        indiceColor = usuarios.num;
      }
    }
    return 'bg-' + colores[indiceColor];
  }
  return (
    <>
      <div
        className={`h-3 w-3 ${ObtenerColorUsuario(
          evt.TERCERECURSOCTROLID || -1
        )} rounded-full inline-block`}
      ></div>
      <div
        className={`h-3 w-3 ${ObtenerColorUsuario(
          evt.TERCERECURSOCTROL2ID || 1
        )} rounded-full inline-block`}
      ></div>
    </>
  );
};

export default RecursosInvolucrados;
