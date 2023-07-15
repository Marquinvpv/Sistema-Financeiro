import '../src/css/App.css';
import AddData from './components/AddData';
import Balanco from './components/Balanco';
import Grafico from './components/Grafico';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Balanco />
        <AddData />
        <Grafico />
      </div>
    </div>
  );
}

export default App;
