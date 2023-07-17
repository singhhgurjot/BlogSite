import React from 'react'
import Navbar from "./dashboardNav"
import toast, { Toaster } from 'react-hot-toast';
import axios from "../../../axios";
import { useEffect } from 'react';
import theGuy from "./sampleImage.jpg";
import {useState} from "react";
import "./dashboard.css"
export default function dashboard() {
const [name,setName]=useState("");
    const [username, setUsername] = useState("");
    const [likes, setTotalLikes] = useState("");
    const [blogsPosted, setBlogsPosted] = useState("");
useEffect(()=>{
axios().get("/dashboard").then((res)=>{
console.log(res.data);
setName(res.data.name);
setUsername(res.data.username);
setTotalLikes(res.data.likes);
setBlogsPosted(res.data.blogsPosted);
}).catch((err)=>{
    toast(err.response.data.message);
})
},[])
  return (
    <div className='outerContainer'>
        <Navbar></Navbar>
        <div className='flex h-screen'>
     <img src={theGuy} className='theguy'></img>
              <div className="flex justify-content font-calli text-bold flex-col space-y-4 ml-20 text-2xl">
     <p className="mt-20 "> Name : {name} </p>
     <p> Username : {username} </p>
     <p> Total Likes : {likes}</p>
     <p> Blogs Posted : {blogsPosted}</p>
              </div>
              </div>
          
          <Toaster />
    </div>
   
  )
}
