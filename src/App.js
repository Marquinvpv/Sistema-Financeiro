import '../src/css/app.css';
import AddData from './components/AddData';
import Balanco from './components/Balanco';
import Tabela from './components/Tabela';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Balanco />
        <AddData />
        <Tabela />
      </div>
    </div>
  );
}

export default App;
