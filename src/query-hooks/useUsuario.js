import { useQuery } from 'react-query'
import axios from 'axios'

export const fetchUsuario = () =>
      axios.post('frmCalendarioV2.aspx/ObtenerUsuario', {}, {
        headers: { 'Content-Type': 'application/json' }
      }).then((res) => res.data)

export default function useUsuario() {
  return useQuery(['usuario'], fetchUsuario)
}
