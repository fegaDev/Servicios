import React from 'react'
//1. importamos en context de react 
import { createContext } from 'react'
//Importar logica login
import useLogin from './login/useLogin'

//2. creamos un objeto para usarlo.
//-- Este es el contexto en general.
export const Context = createContext(null);
//3. creamos el proveedor
//-- El proveedor solo envuelve los componentes
export const ContextProvider = ({ children }) => {

    //Llamamos a la logica de login
    const login = useLogin();

    return (
        <Context.Provider value={login}>
            {children}
        </Context.Provider>
    )
}



