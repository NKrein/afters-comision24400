import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
      <Footer />
    </div>
  );
}

export default App;
