import { useState } from 'react';
import {Routes,Route} from 'react-router-dom';
import './App.css';
import Register from "./components/registerPage/register.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Login from "./components/loginPage/login.jsx";
import Welcome from './components/welcomePage/welcomePage.jsx';
import Dashboard from  "./components/dashboard/dashboard.jsx";
function App() {
  

  return (
    <Routes>
   <Route path="/" Component={Welcome}></Route>
   <Route path="/register" Component={Register}></Route>
   <Route path="/login" Component={Login}></Route>
      <Route path="/dashboard" Component={Dashboard}></Route>


  
</Routes>)
  
}

export default App
