import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Registar from './pages/Registar'
import Login from './pages/Login'
import axios from 'axios'
import {Toaster} from 'react-hot-toast'
import { UserContextProvider } from '../context/userContext'
import Dashboard from './pages/Dashboard'

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.withCredentials = true;


function App() {

  return (
    <UserContextProvider>
      <Navbar />
      <Toaster position='top-right' toastOptions={{duration: 2000}}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/registar' element={<Registar/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </UserContextProvider>
  )
}

export default App
