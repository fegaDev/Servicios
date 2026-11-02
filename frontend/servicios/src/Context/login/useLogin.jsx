import {React,useState} from 'react'
import api from '../../services/api';

const useLogin = () => {

    const [formLogin, setFormLogin] = useState({
        usuario : "",
        password : "",
    });
    const [notificacion,setNotificacion] = useState(null);
    const [autenticado,setAutenticado] = useState(false);


    const cerrarNotificacion = () => {
        setNotificacion(null);
    }

    const cerrarSesion = () => {
        setAutenticado(false);
    }

    const handleChangeLogin = (e) =>{
        const {name,value} = e.target;

        setFormLogin((prev) => ({
            ...prev,
            [name]:value
        }));

    }

    const handleSubmitForm = async (e) =>{
        e.preventDefault();
    try{
        const respuesta = await api.post('/auth/login',formLogin);
        setNotificacion({
            mensaje: respuesta.data.mensaje,
            tipo: 'success'
        })
        if(respuesta.data.autenticado){
        setAutenticado(true);
        }
    }catch(error){
        setNotificacion({
            mensaje: error.response?.data?.mensaje || "Error de conexion",
            tipo : 'error'
        })
    }
    }
   
  return {
        formLogin,
        handleChangeLogin,
        handleSubmitForm,
        notificacion,
        setNotificacion,
        cerrarNotificacion,
        autenticado,
        cerrarSesion
    }
  
}

export default useLogin