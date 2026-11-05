import React from 'react'
import axios from 'axios'

const api  = axios.create({
    baseURL: 'http://localhost:3000/api',
    withCredentials: true, // Permite enviar cookies en las solicitudes
    headers:{
        'Content-Type' : 'application/json'
    },
})

export default api