import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';



function App() {
  return (
    <div className='bg-gradient-to-r from-cyan-200 to-blue-200 font-roboto'>
      

      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
