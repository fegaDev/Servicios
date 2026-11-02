import './App.css'
import Login from './Components/Login';
import { Context } from './Context/ContextProvider'
import { useContext } from 'react';
import Dashboard from './Components/Dashboard';



function App() {

  const {autenticado} = useContext(Context)

  return (
   <>
      {
        autenticado? (<Dashboard />) : (<Login/>)
      }
   </>
  )
}

export default App
