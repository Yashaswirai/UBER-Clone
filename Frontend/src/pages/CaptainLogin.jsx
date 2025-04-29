import React from 'react'
import Login from '../../components/Login'

const CaptainLogin = () => {
  return (
    <div>
      <Login Goto="userlogin" btn="User" register="captainregister" btncolor="bg-orange-400"/>
    </div>
  )
}

export default CaptainLogin
