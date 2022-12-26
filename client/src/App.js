import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/register'} element={<Register />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/*'} element={<div>404 PAGE NOT FOUND !</div>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
