import React from 'react';
import Navbar from './welcomeNav.jsx';
import { useNavigate } from 'react-router-dom';

export default function WelcomePage() {
    const navigate=useNavigate();
    return (
        <div className="outerDiv min-h-screen">
            <Navbar />
            <div className="flex flex-col items-center mt-20">
                <h1 className="font-calli font-bold text-4xl mb-10">
                    Unleash Your Thoughts, Dive into Scribble Sphere!
                </h1>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 font-calli text-2xl" onClick={()=>{
navigate("/register")
                }} >
                    Get Started!
                </button>
            </div>
        </div>
    );
}
