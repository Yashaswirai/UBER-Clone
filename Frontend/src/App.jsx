import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserRegister from './pages/UserRegister'
import CaptainLogin from './pages/CaptainLogin'
import CaptainRegister from './pages/CaptainRegister'
import Home from './pages/Home'
import UserProtectWrapper from '../components/UserProtectWrapper'
import CaptainHome from './pages/CaptainHome'
import Logout from '../components/Logout'
import CaptainProtectedWrapper from '../components/CaptainProtectedWrapper'

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
        <Route path='/logout' element={<UserProtectWrapper><Logout/></UserProtectWrapper>}/>
        <Route path='/captainhome' element={<CaptainProtectedWrapper><CaptainHome/></CaptainProtectedWrapper>}/>
        <Route path='/captainlogout' element={<CaptainProtectedWrapper><Logout/></CaptainProtectedWrapper>}/>
      </Routes>
    </div>
  )
}

export default App
