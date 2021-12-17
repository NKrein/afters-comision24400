import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [estado, setEstado] = useState(false);
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  }

  //Ejecuto en cada actualización (componentWillUpdate)
  useEffect(() => {
    console.log("Ejecuto en cada actualización");
  });

  //Ejecuto unicamente la primera vez (componentWillMount)
  useEffect(() => {
    console.log("Ejecuto solo la primera vez");
  }, []);

  //Ejecuto por cambios de estado de la dependecia ()
  useEffect(() => {
    console.log("Ejecuto cuando cambia la dependencia (count)");
    // Para el cleanUp utilizo el return de la función.
    // return () => {
    //   console.log("Acción para cuando se desmonta");
    // }
  }, [count]);

  console.log(estado);

  return (
    <div className="App">
      <h1>App</h1>
      <button onClick={() => { setEstado(!estado) }}>cambiar estado</button>
      <button onClick={add}>sumar count</button>
    </div>
  );
}

export default App;
