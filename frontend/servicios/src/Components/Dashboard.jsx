import {useContext} from 'react'
import { Context } from '../Context/ContextProvider'

const Dashboard = () => {
    const {cerrarSesion} = useContext(Context);
  return (
    <>
        <div>Bienvenidos al dashboard</div>

    <button onClick={cerrarSesion}>Cerrar Sesion</button>
    </>

  )
}

export default Dashboard