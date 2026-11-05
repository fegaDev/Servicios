import {useContext} from 'react'
import { Context } from '../Context/ContextProvider'
import { Box, TextField, Button } from '@mui/material';



const Login = () => {

    const { formLogin, handleChangeLogin, handleSubmitForm, } = useContext(Context);

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
          onSubmit={handleSubmitForm}
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
          <h1 style={{ textAlign: 'center' }}>Bienvenido App Servicios</h1>

          <TextField
            label="Usuario" fullWidth name='usuario' value={formLogin.usuario} onChange={handleChangeLogin} />

          <TextField
            value={formLogin.password}
            onChange={handleChangeLogin}
            label="Contraseña"
            type="password"
            name='password'
            fullWidth
          />
          <Button variant="contained" type='submit'>
            Ingresar
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default Login