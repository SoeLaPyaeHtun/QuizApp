import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import useStateContext from '../hooks/useStateContext';
import { SiAcclaim } from "react-icons/si";

const NavL = () => {
    const navigate = useNavigate();
    const {resetContext} = useStateContext();
  return (
   <>
   <div className="flex justify-center w-full">
    <nav
  className="relative flex w-3/4 flex-wrap items-center justify-between  py-2 shadow-lg bg-gray-200 lg:py-4">
  <div className="flex w-full flex-wrap items-center justify-between px-3">
    <div className="flex flex-row justify-between w-full">
      {/* <h1 className="text-4xl text-neutral-800 dark:text-black" href="#">Quiz App</h1> */}
      <SiAcclaim size={50} style={{color: '#4F45E4' }}/>
      <a onClick={() => {navigate('/') ; resetContext()}} className="relative px-6 py-3 font-bold text-white rounded-lg group">
<span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
<span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-90 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
<span className="relative">Logout</span>
</a>
    </div>
  </div>
</nav>
</div>

   <Outlet />
   </>
   
  )
}

export default NavL