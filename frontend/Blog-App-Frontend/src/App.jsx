import { useState } from 'react';
import {Routes,Route} from 'react-router-dom';
import './App.css';
import Register from "./components/registerPage/register.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Login from "./components/loginPage/login.jsx";
import Welcome from './components/welcomePage/welcomePage.jsx';
import Dashboard from  "./components/dashboard/dashboard.jsx";
import IndividualBlog from './components/IndividualBlog/IndividualBlog.jsx';
import WriteBlog from "./components/writeBlog/writeBlog.jsx";
function App() {
  

  return (
    <Routes>
   <Route path="/" Component={Welcome}></Route>
   <Route path="/register" Component={Register}></Route>
   <Route path="/login" Component={Login}></Route>
      <Route path="/dashboard" Component={Dashboard}></Route>
    <Route path="/blog/:id" Component={IndividualBlog}></Route>
<Route path="/write" Component={WriteBlog}></Route>
  
</Routes>)
  
}

export default App
