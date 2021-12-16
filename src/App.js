
import './App.css';
import Home from './component/Home';
import NavBar from './component/NavBar';
import Contador from './container/Contador';
import List from './container/List';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <NavBar />
      <Home saludo={'hola desde App!'} />
      <List />
      <Contador stock={5} initial={1}/>
    </div>
  );
}

export default App;
