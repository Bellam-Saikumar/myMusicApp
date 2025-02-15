import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
// import { Navbar } from './components/Navbar';
import { RegisterForm } from './components/Register';
import { LoginForm } from './components/Login';
import{ HomePage } from './components/Home';
import { PlayList } from './components/PlayList';

function App() {
    return (   
      <BrowserRouter> 
        <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/PlayList' element={<PlayList />} />
      </Routes>
      </BrowserRouter> 
      
  
    );
}
export default App;
