import './App.css'
import Login from './Components/Login';
import { Context } from './Context/ContextProvider'
import { useContext, useEffect } from 'react';
import Dashboard from './Components/Dashboard';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';

function App() {

  const { autenticado, notificacion, cerrarNotificacion, verificarSesion, cargando } = useContext(Context)

  
    useEffect(() => {
      verificarSesion();
    }, []);
  

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

      {cargando
        ? <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row"><CircularProgress color="success" aria-label="Loading…" />
        </Stack>
        : autenticado
          ? <Dashboard />
          : <Login />
      }
    </>
  )
}

export default App
