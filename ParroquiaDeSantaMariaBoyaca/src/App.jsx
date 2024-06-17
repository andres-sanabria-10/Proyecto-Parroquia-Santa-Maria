import { useEffect } from "react";
import Login from '/src/components/encabezado'
import Encabezado from './components/login'

function App() {
  useEffect(() => {
    console.log('cargo');
    //aca haremos las peticiones
  });

  return (
    <>
        <Login/>
    <Encabezado/>

    

    
    </>
  );
}

export default App;