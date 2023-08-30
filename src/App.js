import '../src/css/app.css';
import AddData from './components/AddData';
import Balanco from './components/Balanco';
import Tabela from './components/Tabela';
import Header from './components/Header';
import { DataProvider } from './provider/dataProvider';

function App() {
  return (
    <DataProvider>
    <div className="App">
      <Header />
      <div className='container'>
        <Balanco />
        <AddData />
        <Tabela />
      </div>
    </div>
    </DataProvider>
  );
}

export default App;
