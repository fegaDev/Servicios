import './App.css'
import { useContext } from 'react'
import { Context } from './Context/ContextProvider'
import { Box,TextField,Button } from '@mui/material';
function App() {
  const {count,handleIncrement} = useContext(Context)
  return (
    <>
     <Box
  sx={{
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  }}
>
  
  <Box
    component="form"
    sx={{
      width: '100%',
      maxWidth: 400,
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      padding: 3,
      borderRadius: 2,
      boxShadow: 3
    }}
  >
         <h1 style={{textAlign:'center'}}>Bienvenido App Servicios</h1>

    <TextField label="Usuario" fullWidth />

    <TextField
      label="Contraseña"
      type="password"
      fullWidth
    />

    <Button variant="contained" type="submit">
      Ingresar
    </Button>

  </Box>
</Box>
    </>
  )
}

export default App
