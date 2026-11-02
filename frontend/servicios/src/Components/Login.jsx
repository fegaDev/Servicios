import {useContext} from 'react'
import { Context } from '../Context/ContextProvider'
import { Box, TextField, Button } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


const Login = () => {

    const { formLogin, handleChangeLogin, handleSubmitForm, notificacion, cerrarNotificacion ,cerrarSesion} = useContext(Context);

  return (
     <>
      <Snackbar
        open={Boolean(notificacion)}
        autoHideDuration={4000}
        onClose={cerrarNotificacion}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        {notificacion && (
          <Alert
            onClose={cerrarNotificacion}
            severity={notificacion.tipo}
            variant="filled"
            sx={{ width: '100%' }}
          >
            {notificacion.mensaje}
          </Alert>
        )}
      </Snackbar>

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