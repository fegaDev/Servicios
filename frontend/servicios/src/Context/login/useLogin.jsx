import { React, useState } from 'react'
import api from '../../services/api';

const useLogin = () => {

    const [formLogin, setFormLogin] = useState({
        usuario: "",
        password: "",
    });

    const [notificacion, setNotificacion] = useState(null);
    const [autenticado, setAutenticado] = useState(false);
    const [cargando, setCargando] = useState(false);

    const cerrarNotificacion = () => {
        setNotificacion(null);
    }

    const cerrarSesion = async () => {
        setAutenticado(true);
        try{
            const respuesta = await api.post('/auth/logout');
            setNotificacion({
                mensaje: respuesta.data.mensaje,
                tipo: 'success'
            })
            setAutenticado(false);
        } catch (error) {
            setNotificacion({
                mensaje: error.response?.data?.mensaje || "Error de conexion",
                tipo: 'error'
            })
        } finally {
            setCargando(false);
        }   
        
    };

    const handleChangeLogin = (e) => {
        const { name, value } = e.target;

        setFormLogin((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        setCargando(true);
        try {
            const respuesta = await api.post('/auth/login', formLogin);
            setNotificacion({
                mensaje: respuesta.data.mensaje,
                tipo: 'success'
            })
            if (respuesta.data.autenticado) {
                setAutenticado(true);
            }
        } catch (error) {
            setNotificacion({
                mensaje: error.response?.data?.mensaje || "Error de conexion",
                tipo: 'error'
            })
        }
        finally {
            setCargando(false);
        }
    }

    const verificarSesion = async () => {
        setCargando(true);
        try {
            const respuesta = await api.get('/auth/session');
            if (respuesta.data.autenticado) {
                setAutenticado(true);
            } else {
                setAutenticado(false);
            }
        } catch (error) {
            setNotificacion({
                mensaje: error.response?.data?.mensaje || "Error de conexion",
                tipo: 'error'
            })
            setAutenticado(false);
        } finally {
            setCargando(false);

        }

    };

    return {
        formLogin,
        handleChangeLogin,
        handleSubmitForm,
        notificacion,
        setNotificacion,
        cerrarNotificacion,
        autenticado,
        cargando,
        cerrarSesion,
        verificarSesion
    }

}

export default useLogin