


// import { useState } from 'react'

import './assets/css/style.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from './components/Register'
import Login from './components/Login'


function App() {
  

  return (
    <>
        <BrowserRouter >
            <Header />
              <Routes>
                <Route path='/' element={<Main/>} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                {/* <Route path='/register' element={<PublicRoute><Register /></PublicRoute>} /> */}
                {/* <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />
                <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} /> */}
              </Routes>
            <Footer />
          </BrowserRouter>
    </>
  )
}

export default App
