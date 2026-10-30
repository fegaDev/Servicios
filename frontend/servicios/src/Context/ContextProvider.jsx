import React from 'react'
//1. importamos en context de react 
import {createContext, useState} from 'react'

//2. creamos un objeto para usarlo.
//-- Este es el contexto en general.
export const Context = createContext();
//3. creamos el proveedor
//-- El proveedor solo envuelve los componentes
export const ContextProvider = ({children}) => {
    //Prueba
    const [count, setCount] = useState(0)

    const handleIncrement = (e) => {
        e.preventDefault();
        setCount(count + 1);
        console.log(count);
    }
    return (
        <Context.Provider value={{count, handleIncrement}}>
            {children}
        </Context.Provider> 
    )
}



