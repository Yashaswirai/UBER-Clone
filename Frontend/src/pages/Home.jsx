import React, { useContext } from "react";
import { Link } from "react-router-dom";
const home = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1538563188159-070c4db2bc65?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] w-full h-screen flex flex-col justify-between bg-black bg-opacity-50'>
        <img className='w-16 pt-8 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber logo" />
        <div className='w-full px-2 py-2.5 flex flex-col bg-white'>
          <h1 className='text-3xl mb-8 text-black font-bold'>Get started with Uber</h1>
          <Link to='/userlogin' className='flex justify-center bg-black w-full py-2 text-2xl rounded-md text-white'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default home
