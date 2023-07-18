import React from 'react'
import "./IndividualBlog.css"
import {useEffect,useState} from 'react'
import axios from '../../../axios'
import {toast,Toaster} from "react-hot-toast"
import { useLocation } from 'react-router-dom'
export default function IndividualBlog(props) {
    const [blog,setBlog]=useState([]);
    const location = useLocation();
    const url = location.pathname;
    const blog_id = url.split("/")[2];
    const callUrl = "/blog/" + blog_id;
    useEffect(()=>{
        axios().get(callUrl).then((res)=>{
            setBlog(res.data.Blog);
            
        }).catch((err)=>{
            toast(err);
        })
    },[])
   
    

  return (

    <div className="outerContainer min-h-screen flex flex-col items-center">

      <h1 className="font-calli text-4xl text-bold mt-20">{blog.title}</h1>
          <div className="content-container shadow-xl  " >
              <p className='font-calli mt-5'>{blog.content} </p>
      </div>
          <Toaster />
    </div>
   
  )
}
