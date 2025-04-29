import React from 'react'
import Login from '../../components/Login'

const UserLogin = () => {
  return (
    <div>
      <Login Goto="captainlogin" btn="Captain" register="userregister" btncolor="bg-green-700"/>
    </div>
  )
}

export default UserLogin
