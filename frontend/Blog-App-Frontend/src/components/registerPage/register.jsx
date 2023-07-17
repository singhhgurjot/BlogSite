import React from 'react'
import 'tailwindcss/tailwind.css';
import './register.css';
import swal from 'sweetalert';
import {useState} from "react";
import toast, { Toaster } from 'react-hot-toast';
import Navbar from "../navbar/navbar";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
export default function register() {
  const navigate=useNavigate();
  const [name,setName]=useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const Submit=()=>{
    const reqBody={
      name:name,
      username:username,
      password:password,
      password_confirmation:confirmPassword,
      tc:true
    }
    axios.post("http://localhost:8080/api/user/register", reqBody)
      .then((res) => {
        toast(res.data.message);
        if(res.data.success==true){
          setTimeout(()=>{
            navigate("/login")

          },3000)
        }
      })
      .catch((err) => {
        toast(err.response.data.message);
      });
  }
  
  return (

     <>
 <div className="outerContainer">
  
    <Navbar/>
      <div className='flex items-center justify-center h-screen outer-div' >
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-reg-font text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name" onChange={(e) => {
                  let currVal = e.target.value;
                  setName(currVal);
                  

                }}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-reg-font text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username" onChange={(e)=>{
                  let currVal=e.target.value;
                  setUsername(currVal);
              
                }}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-reg-font text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                onChange={(e) => {
                  let currVal = e.target.value;
                  setPassword(currVal);


                }}
              />
              <p className="text-red-500 text-xs italic">Please choose a password.</p>
            </div>
            <div className="mb-6">
              <label
                className="block text-reg-font text-sm font-bold mb-2"
                htmlFor="confirm_password"
              >
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="confirm-password"
                type="password"
                placeholder="******************"
                onChange={(e) => {
                  let currVal = e.target.value;
                  setConfirmPassword(currVal);


                }}
              />
              <p className="text-red-500 text-xs italic">Confirm your password.</p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button" onClick={Submit}
              >
                Register
              </button>

            </div>
          </form>

        </div>

      </div>
     
      </div>
      <Toaster/>
     </>
  )
}
