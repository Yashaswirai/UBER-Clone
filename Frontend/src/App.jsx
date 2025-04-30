import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserRegister from './pages/UserRegister'
import CaptainLogin from './pages/CaptainLogin'
import CaptainRegister from './pages/CaptainRegister'
import Home from './pages/Home'
import UserProtectWrapper from '../components/UserProtectWrapper'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start/>} />
        <Route path='/userlogin' element={<UserLogin/>} />
        <Route path='/userregister' element={<UserRegister/>} />
        <Route path='/captainlogin' element={<CaptainLogin/>} />
        <Route path='/captainregister' element={<CaptainRegister/>} />
        <Route path='/home' element={<UserProtectWrapper><Home/></UserProtectWrapper>}/>
      </Routes>
    </div>
  )
}

export default App
