import './App.css';
import Login from './components/account/Login';
import DataProvider from './context/DataProvider';
import Home from './components/home/Home';
import Header from './components/header/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <DataProvider>
        <BrowserRouter>
        <div className="App">
          <Routes>
            <Header/>
            <Route path='/login' element={<Login/>} />
            <Route path='/' element={<Home/>} />
          </Routes>
        </div>
        </BrowserRouter>
    </DataProvider>
  );
}

export default App;
