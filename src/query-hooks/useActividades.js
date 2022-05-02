import { useQuery } from 'react-query'
import axios from 'axios'

export const fetchActividades = () =>
     axios.post('frmCalendarioV2.aspx/ObtenerActividadesxTerceIdxFechaInixFechaFin', {FechaInicial:dayjs(getMonth(monthIndex)[0][0]).format("DD-MM-YY").toString(),FechaFinal:dayjs(getMonth(monthIndex)[4][6]).format("DD-MM-YY").toString(),ArrIds: arrIds ? arrIds : []}, {
       headers: { 'Content-Type': 'application/json' }
     }).then((res) => res.data)

export default function useActividades() {
  return useQuery(['actividades'], fetchActividades)
}
