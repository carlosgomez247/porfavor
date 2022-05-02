import React, { useContext, useState, useEffect } from 'react';
import dayjs from 'dayjs';
import GlobalContext from '../Context/GlobalContext';
import { timeConvert } from '../Util/Util';
import Hora from './Hora';
import axios from 'axios';
import { getMonth } from '../Util/Util';

let arrHoras = [
  { hora: 1, jornada: 'am', horam: 1 },
  { hora: 2, jornada: 'am', horam: 2 },
  { hora: 3, jornada: 'am', horam: 3 },
  { hora: 4, jornada: 'am', horam: 4 },
  { hora: 5, jornada: 'am', horam: 5 },
  { hora: 6, jornada: 'am', horam: 1 },
  { hora: 7, jornada: 'am', horam: 7 },
  { hora: 8, jornada: 'am', horam: 8 },
  { hora: 9, jornada: 'am', horam: 9 },
  { hora: 10, jornada: 'am', horam: 10 },
  { hora: 11, jornada: 'am', horam: 11 },
  { hora: 12, jornada: 'am', horam: 12 },
  { hora: 1, jornada: 'pm', horam: 13 },
  { hora: 2, jornada: 'pm', horam: 14 },
  { hora: 3, jornada: 'pm', horam: 15 },
  { hora: 4, jornada: 'pm', horam: 16 },
  { hora: 5, jornada: 'pm', horam: 17 },
  { hora: 6, jornada: 'pm', horam: 18 },
  { hora: 7, jornada: 'pm', horam: 19 },
  { hora: 8, jornada: 'pm', horam: 20 },
  { hora: 9, jornada: 'pm', horam: 21 },
  { hora: 10, jornada: 'pm', horam: 22 },
  { hora: 11, jornada: 'pm', horam: 23 },
];

export default function Dia({ day, rowIdx, idUsuDia }) {
  //console.log('EL PROBLEMA: ' + idUsuDia);
  //console.log(usuarios);
  //let arrHoras = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]

  const [dayEvents, setDayEvents] = useState([]);
  const {
    setDaySelected,
    idUsuario,
    opcionVista,
    ActividadesMes,
    filtrarActividades,
    colores,
    usuarios,
    monthIndex,
    arrIds,
  } = useContext(GlobalContext);
  //console.log(usuarios);
  useEffect(() => {
    //console.log(filtrarActividades)

    // const events =
    // ActividadesMes?
    // ActividadesMes.filter(
    //   (x) =>
    //   {
    //     if (contador < 4) {
    //     if ((x.FECHACALINI != undefined) && (x.FECHACALINI != null) && (x.FECHACALFIN != undefined) && (x.FECHACALFIN != null) && ((dayjs(timeConvert(x.FECHACALINI)).format("DD-MM-YY")  === day.format("DD-MM-YY")) || (dayjs(timeConvert(x.FECHACALFIN)).format("DD-MM-YY")  === day.format("DD-MM-YY")))){
    //       contador++
    //       return true
    //      }
    //      if ((x.FECHACALINI2 != undefined) && (x.FECHACALINI2 != null) && (x.FECHACALFIN2 != undefined) && (x.FECHACALFIN2 != null) && ((dayjs(timeConvert(x.FECHACALINI2)).format("DD-MM-YY")  === day.format("DD-MM-YY")) || (dayjs(timeConvert(x.FECHACALFIN2)).format("DD-MM-YY")  === day.format("DD-MM-YY")))){
    //       contador++
    //       return true
    //      }
    //      if ((x.FECHACALINI3 != undefined) && (x.FECHACALINI3 != null) && (x.FECHACALFIN3 != undefined) && (x.FECHACALFIN3 != null) && ((dayjs(timeConvert(x.FECHACALINI3)).format("DD-MM-YY")  === day.format("DD-MM-YY")) || (dayjs(timeConvert(x.FECHACALFIN3)).format("DD-MM-YY")  === day.format("DD-MM-YY")))){
    //       contador++
    //       return true
    //      }
    //      if ((x.FECHACALINI4 != undefined) && (x.FECHACALINI4 != null) && (x.FECHACALFIN4 != undefined) && (x.FECHACALFIN4 != null) && ((dayjs(timeConvert(x.FECHACALINI4)).format("DD-MM-YY")  === day.format("DD-MM-YY")) || (dayjs(timeConvert(x.FECHACALFIN4)).format("DD-MM-YY")  === day.format("DD-MM-YY")))){
    //       contador++
    //       return true
    //      }}

    //      return false
    //   },contador = 0
    // ):[]

    let events = [];
    let contador = 0;

    for (let i = 0; i < filtrarActividades.length; i++) {
      if (
        filtrarActividades[i].FECHACALINI != undefined &&
        filtrarActividades[i].FECHACALINI != null &&
        filtrarActividades[i].FECHACALFIN != undefined &&
        filtrarActividades[i].FECHACALFIN != null &&
        (dayjs(timeConvert(filtrarActividades[i].FECHACALINI)).format(
          'DD-MM-YY'
        ) === day.format('DD-MM-YY') ||
          dayjs(timeConvert(filtrarActividades[i].FECHACALFIN)).format(
            'DD-MM-YY'
          ) === day.format('DD-MM-YY'))
      ) {
        events.push(filtrarActividades[i]);
        contador++;
        //return true
      }
      if (
        filtrarActividades[i].FECHACALINI2 != undefined &&
        filtrarActividades[i].FECHACALINI2 != null &&
        filtrarActividades[i].FECHACALFIN2 != undefined &&
        filtrarActividades[i].FECHACALFIN2 != null &&
        (dayjs(timeConvert(filtrarActividades[i].FECHACALINI2)).format(
          'DD-MM-YY'
        ) === day.format('DD-MM-YY') ||
          dayjs(timeConvert(filtrarActividades[i].FECHACALFIN2)).format(
            'DD-MM-YY'
          ) === day.format('DD-MM-YY'))
      ) {
        events.push(filtrarActividades[i]);
        contador++;
        //return true
      }
      if (
        filtrarActividades[i].FECHACALINI3 != undefined &&
        filtrarActividades[i].FECHACALINI3 != null &&
        filtrarActividades[i].FECHACALFIN3 != undefined &&
        filtrarActividades[i].FECHACALFIN3 != null &&
        (dayjs(timeConvert(filtrarActividades[i].FECHACALINI3)).format(
          'DD-MM-YY'
        ) === day.format('DD-MM-YY') ||
          dayjs(timeConvert(filtrarActividades[i].FECHACALFIN3)).format(
            'DD-MM-YY'
          ) === day.format('DD-MM-YY'))
      ) {
        events.push(filtrarActividades[i]);
        contador++;
        //return true
      }
      if (
        filtrarActividades[i].FECHACALINI4 != undefined &&
        filtrarActividades[i].FECHACALINI4 != null &&
        filtrarActividades[i].FECHACALFIN4 != undefined &&
        filtrarActividades[i].FECHACALFIN4 != null &&
        (dayjs(timeConvert(filtrarActividades[i].FECHACALINI4)).format(
          'DD-MM-YY'
        ) === day.format('DD-MM-YY') ||
          dayjs(timeConvert(filtrarActividades[i].FECHACALFIN4)).format(
            'DD-MM-YY'
          ) === day.format('DD-MM-YY'))
      ) {
        events.push(filtrarActividades[i]);
        contador++;
        //return true
      }
      if (contador > 3) {
        break;
      }
    }

    //(contador)
    setDayEvents(events);
  }, [ActividadesMes, day]);

  function getCurrentDayClass() {
    return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
      ? 'bg-blue-600 text-white rounded-full w-7'
      : '';
  }

  function ObtenerClaseColor(evt) {
    let claseColor = 'colorAzul';
    if (evt.ESTADO === 3) {
      claseColor = 'colorVerde';
    } else if (evt.USUARIOSID != idUsuario && evt.ESTADO === 1) {
      claseColor = 'colorAzulClaro';
    } else if (evt.USUARIOSID === idUsuario && evt.ESTADO === 1) {
      claseColor = 'colorAzul';
    }
    return claseColor;
  }

  function ObtenerColorUsuario(evt) {
    //console.log(evt.TERCERECURSOCTROLID);
    for (let i = 0; i < usuarios.length; i++) {
      if (
        usuarios[i].id === evt.TERCERECURSOCTROLID ||
        usuarios[i].id === evt.TERCERECURSOCTROL2ID ||
        usuarios[i].id === evt.TERCERECURSOCTROL3ID ||
        usuarios[i].id === evt.TERCERECURSOCTROL4ID
      ) {
        return 'bg-' + colores[usuarios[i].num];
      }
    }
    return '';
  }

  return opcionVista == 1 ? (
    <div className='border border-gray-200 flex flex-col '>
      <header className='flex flex-col items-center'>
        {rowIdx === 0 && (
          <p className='text-sm mt-1'>{day.format('ddd').toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center  ${getCurrentDayClass()}`}>
          {day.format('DD')}
        </p>
      </header>
      <div
        className='flex-1 cursor-pointer'
        onClick={() => {
          setDaySelected(day);
        }}
      >
        {dayEvents.map((evt, idx) => (
          <div
            key={idx}
            // onClick={() => (window.open('../../FlujodeTrabajo/Formularios/frmCrearActividades.aspx?Formulario=frmCreaActividades&ID='+ evt.FLUJOTRABAJOID, '_blank'))}
            onClick={() => (
              (window.location.href = `../../FlujodeTrabajo/Formularios/frmCrearActividades.aspx?Formulario=frmCreaActividades&ID=${evt.FLUJOTRABAJOID}`),
              '_blank'
            )}
            className={`${ObtenerClaseColor(
              evt
            )} p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
          >
            <div
              className={`h-3 w-3 ${ObtenerColorUsuario(
                evt
              )} rounded-full inline-block`}
            ></div>
            {evt.FLUJOTRABAJOID.toLocaleString()} - {evt.ASUNTO}
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className='flex-1 grid grid-cols-1 grid-rows-24'>
      <React.Fragment>
        {arrHoras.map((hora) => {
          //console.log('stuff')
          return (
            <Hora
              hora={hora.hora}
              jornada={hora.jornada}
              idUsuDia={idUsuDia}
              eventos={
                dayEvents
                  ? dayEvents.filter((x) => {
                      if (
                        x.HORACALINI != undefined &&
                        x.HORACALINI != null &&
                        x.HORACALFIN != undefined &&
                        x.HORACALFIN != null &&
                        (x.HORACALINI.Hours === hora.horam ||
                          x.HORACALFIN.Hours === hora.horam) &&
                        x.TERCERECURSOCTROLID === idUsuDia
                      ) {
                        return true;
                      }
                      if (
                        x.HORACALINI2 != undefined &&
                        x.HORACALINI2 != null &&
                        x.HORACALFIN2 != undefined &&
                        x.HORACALFIN2 != null &&
                        (x.HORACALINI2.Hours === hora.horam ||
                          x.HORACALFIN2.Hours === hora.horam) &&
                        x.TERCERECURSOCTROL2ID === idUsuDia
                      ) {
                        return true;
                      }
                      if (
                        x.HORACALINI3 != undefined &&
                        x.HORACALINI3 != null &&
                        x.HORACALFIN3 != undefined &&
                        x.HORACALFIN3 != null &&
                        (x.HORACALINI3.Hours === hora.horam ||
                          x.HORACALFIN3.Hours === hora.horam) &&
                        x.TERCERECURSOCTROL3ID === idUsuDia
                      ) {
                        return true;
                      }
                      if (
                        x.HORACALINI4 != undefined &&
                        x.HORACALINI4 != null &&
                        x.HORACALFIN4 != undefined &&
                        x.HORACALFIN4 != null &&
                        (x.HORACALINI4.Hours === hora.horam ||
                          x.HORACALFIN4.Hours === hora.horam) &&
                        x.TERCERECURSOCTROL4ID === idUsuDia
                      ) {
                        return true;
                      }
                      return false;
                    })
                  : []
              }
            />
          );
        })}
      </React.Fragment>
    </div>
  );
}
