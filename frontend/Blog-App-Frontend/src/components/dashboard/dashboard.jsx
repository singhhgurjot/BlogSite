import React from 'react'
import Navbar from "./dashboardNav"
import toast, { Toaster } from 'react-hot-toast';
import axios from "../../../axios";
import { useEffect } from 'react';
import theGuy from "./sampleImage.jpg";
import BlogMiniView from '../blogMiniView/blogMiniView';
import {useState} from "react";
import "./dashboard.css"
export default function dashboard() {
const [name,setName]=useState("");
    const [username, setUsername] = useState("");
    const [likes, setTotalLikes] = useState("");
    const [blogsPosted, setBlogsPosted] = useState("");
    const [blogs,setBlogs]=useState([]);
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
useEffect(()=>{
  axios().get("/fetchblogs").then((res)=>{
    console.log(res.data.Blogs);
    setBlogs(res.data.Blogs);
  
  })
},[]);
  return (
    <div className='outerContainer'>
        <Navbar></Navbar>
      <div className='flex gap-20 justify-content-space-between min-h-screen'>
          <div>
     <img src={theGuy} className='theguy'></img>
        </div>
              <div className="flex justify-content font-calli text-bold flex-col space-y-4 ml-20 text-2xl">
     <p className="mt-20"> Name : {name} </p>
     <p> Username : {username} </p>
     <p> Total Likes : {likes}</p>
     <p> Blogs Posted : {blogsPosted}</p>
              </div>
              <div className="ml-400 mt-20 flex flex-col add-here">
        <h1 className="font-calli text-bold text-2xl ml-20 mt--5"> MY BLOGS</h1>
          {blogs.map((individual) => (
            <BlogMiniView
              key={individual.id}
              title={individual.title}
              content={individual.content}
              
            />
          ))}
        
        </div>
              </div>

          
          <Toaster />
    </div>
   
  )
}
