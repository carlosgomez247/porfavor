import React,{useContext} from "react";
import GlobalContext from "../Context/GlobalContext";
import ReactTooltip from 'react-tooltip';

function Hora({hora,jornada,eventos}) {
  ///console.log('HORA')
  //console.log(eventos)
    const {
        idUsuario       
      } = useContext(GlobalContext); 

    function ObtenerClaseColor(evt){  
        let claseColor = 'colorAzul'
        if (evt.ESTADO === 3){
          claseColor = 'colorVerde'
        }
        else if(evt.USUARIOSID != idUsuario && evt.ESTADO === 1){
          claseColor = 'colorAzulClaro'
        }
        else if(evt.USUARIOSID === idUsuario && evt.ESTADO === 1){
          claseColor = 'colorAzul'
        }
        return claseColor
      }
      function retornaHora(x){
        if (
          x.HORACALINI != undefined &&
          x.HORACALINI != null &&
          x.HORACALFIN != undefined &&
          x.HORACALFIN != null ) {
          return x.HORACALINI.Hours + '-' + x.HORACALFIN.Hours ;
        }
        else if (
          x.HORACALINI2 != undefined &&
          x.HORACALINI2 != null &&
          x.HORACALFIN2 != undefined &&
          x.HORACALFIN2 != null ) {
            return x.HORACALINI2.Hours + '-' + x.HORACALFIN2.Hours ;
        }
        else if (
          x.HORACALINI3 != undefined &&
          x.HORACALINI3 != null &&
          x.HORACALFIN3 != undefined &&
          x.HORACALFIN3 != null ) {
            return x.HORACALINI3.Hours + '-' + x.HORACALFIN3.Hours ;
        }
        else if (
          x.HORACALINI4 != undefined &&
          x.HORACALINI4 != null &&
          x.HORACALFIN4 != undefined &&
          x.HORACALFIN4 != null ) {
            return x.HORACALINI4.Hours + '-' + x.HORACALFIN4.Hours ;
        }
        return ''
      }

  return (
    // <div>{hora } {jornada}</div>
    
    <div className=" border border-gray-200 flex flex-col ">
      <div>{hora } {jornada}</div>
      <div
        className="flex-1 cursor-pointer"       
      >
        {eventos.map((evt, idx) => {          
        return(               
          <div     
              data-for="custom-color"
              data-tip={evt.ASUNTO}
            key={idx}
            // onClick={() => (window.open('../../FlujodeTrabajo/Formularios/frmCrearActividades.aspx?Formulario=frmCreaActividades&ID='+ evt.FLUJOTRABAJOID, '_blank'))}
            onClick={() => (window.location.href = `../../FlujodeTrabajo/Formularios/frmCrearActividades.aspx?Formulario=frmCreaActividades&ID=${evt.FLUJOTRABAJOID}` , '_blank')}
            
            className={`${ObtenerClaseColor(evt)} p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate border-2 border-white-500 w-80 `}
            // style={{zIndex:idx,position:"absolute",left:350 + idx*20,height:(idx+1) * 80}}            
          >       
           {/* <ReactTooltip
                  id="custom-color"
                  className="custom-color"
                  place="right"
                  border
                  textColor="#5F4B8BFF"
                  backgroundColor="#E69A8DFF"
                  borderColor="darkgreen"
                  arrowColor="red"
                /> */}
              {evt.FLUJOTRABAJOID.toLocaleString()} 
          </div>         
        )})}      
      </div>
    </div>    
  )
}

export default Hora