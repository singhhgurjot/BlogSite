import React from 'react'
import Navbar from '../navbar/navbar.jsx'
import {useState} from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
export default function login() {
const navigate=useNavigate();
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const Submit = () => {
        const reqBody = {
          
            username: username,
            password: password,
        }
        axios.post("http://localhost:8080/api/user/login", reqBody)
            .then((res) => {
                toast(res.data.message);
                if(res.data.success==true){
                    console.log(res.data.token);
                    localStorage.setItem("token",res.data.token);
                    navigate("/dashboard");
                }
                
            })
            .catch((err) => {
                toast(err.response.data.message);
            });
    }

    
  return (
    <>
    <div className="outerContainer">
          <Navbar />
          <div className='flex items-center justify-center h-screen outer-div' >
              <div className="w-full max-w-xs">
                  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                      
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
                              placeholder="Username" onChange={(e) => {
                                  let currVal = e.target.value;
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
                          <p className="text-red-500 text-xs italic">Please Enter Your password.</p>
                      </div>
                     
                      <div className="flex items-center justify-between">
                          <button
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                              type="button" onClick={Submit}
                          >
                             Login
                          </button>

                      </div>
                  </form>

              </div>

          </div>
          </div>
          <Toaster />
    </>
  )
}
