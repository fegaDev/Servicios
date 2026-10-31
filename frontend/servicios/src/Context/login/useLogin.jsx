import {React,useState} from 'react'

const useLogin = () => {

    const [formLogin, setFormLogin] = useState({
        usuario : "",
        password : "",
    });

    const handleChangeLogin = (e) =>{
        const {name,value} = e.target;
        setFormLogin((prev) => ({
            ...prev,
            [name]:value
        }));

    }

    const handleSubmitForm = (e) =>{
        e.preventDefault();
        console.log('Datos enviado',formLogin)
    }
   
  return {
        formLogin,
        handleChangeLogin,
        handleSubmitForm
    }
  
}

export default useLogin