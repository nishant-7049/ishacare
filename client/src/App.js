import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

const Home = () => <div>Home</div>
const Patients = () => <div>Patients</div>
const Doctors = () => <div>Doctors</div>
const Organisers = () => <div>Organisers</div>

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route exact path='/' component={Home} />
          <Route path='/patients' component={Patients} />
          <Route path='/doctors' component={Doctors} />
          <Route path='/organisers' component={Organisers} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
