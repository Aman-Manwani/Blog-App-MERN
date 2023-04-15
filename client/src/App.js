import './App.css';
import Login from './components/account/Login';
import DataProvider from './context/DataProvider';
import Home from './components/home/Home';
import Header from './components/header/Header';
import {BrowserRouter,Routes,Route, Navigate, Outlet} from 'react-router-dom'
import { useState } from 'react';
import CreatePost from './components/create/CreatePost';

// const PrivateRoute = ({isAuthenticated,...props}) => {
//   return isAuthenticated ?
//     <>
//       <Header/>
//       <Outlet/>
//     </>
//   :
//     <Navigate replace to='/login'/>

// }

function App() {

  const [isAuthenticated,setIsAuthenticated] = useState(false);
  return (
    <DataProvider>
        <BrowserRouter>
        <div className="App">
          <Header/>
          <Routes>
            <Route path='/login' element={<Login isAuthenticated = {setIsAuthenticated}/>} />
            {/* <Route path='/' element={<PrivateRoute isAuthenticated = {isAuthenticated}/>}> */}
              <Route path='/' element={<Home/>} />
            {/* </Route> */}
            {/* <Route path='/create' element={<PrivateRoute isAuthenticated = {isAuthenticated}/>}> */}
              <Route path='/create' element={<CreatePost/>} />
            {/* </Route> */}
          </Routes>
        </div>
        </BrowserRouter>
    </DataProvider>
  );
}

export default App;
