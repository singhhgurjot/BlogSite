import React from 'react'
import Navbar from "./dashboardNav"
import toast, { Toaster } from 'react-hot-toast';
import axios from "../../../axios";
import { useEffect } from 'react';
import theGuy from "./sampleImage.jpg";
import "./dashboard.css"
export default function dashboard() {
useEffect(()=>{
axios().get("/dashboard").then((res)=>{
toast(res.data);
console.log(res.data);
}).catch((err)=>{
    toast(err.response.data.message);
})
},[])
  return (
    <div>
        <Navbar></Navbar>
     <img src={theGuy} className='theguy'></img>
          <Toaster />
    </div>
   
  )
}
