import React from 'react';
import axios from '../../../axios';
import {useState} from "react";
import {toast,Toaster} from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

export default function WriteBlog() {
    const navigate = useNavigate();
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");
    const postBlog=()=>{
        const body={
            title:title,
            content:content,
        }
        axios().post("/addBlog",body).then((res)=>{
                toast(res.data.message);
            
            setTimeout(()=>{
                navigate("/dashboard");
            },3000)
        }).catch((err)=>{
            toast(err.response.data.message);
        })

    }
    return (
        <div className="flex justify-center items-center h-screen outerDiv">
            <div className="w-1/2 bg-gray-100 p-8 rounded-lg">
                <h2 className="text-2xl mb-4">Write a Blog</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            className="w-full px-3 py-2 border border-gray-300 rounded" 
                            onChange={(e)=>{
                            setTitle(e.target.value);   
                            }}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="content" className="block text-gray-700">
                            Content
                        </label>
                        <textarea
                            id="content"
                            className="w-full px-3 py-2 border border-gray-300 rounded h-1000"
                            onChange={(e) => {
                                setContent(e.target.value);
                            }}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={postBlog}
                    >
                        Publish
                    </button>
                </form>
            </div>
            <Toaster />
        </div>
        
    );
}
