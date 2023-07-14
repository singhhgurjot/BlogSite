import { useState } from 'react';
import {Routes,Route} from 'react-router-dom';
import './App.css';
import Register from "./components/registerPage/register.jsx";
import Navbar from "./components/navbar/navbar.jsx";
function App() {
  

  return (
    <Routes>
   
   <Route path="/register" Component={Register}></Route>
  
</Routes>)
  
}

export default App
