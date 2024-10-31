import { useState } from 'react'
 import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
  
import Footer from './Components/Footer'
import Home from './Pages/Home'
import PageFeatures from './Pages/PageFeatures'
import Blog from './Pages/Blog'
import Dark from './Components/Dark'
 

function App() {
   

  return (
    <div className='bg-[#fbf9f8] dark:bg-[#0e0e0e]'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
         <Route path='/' element={ <Home/>}/>
          <Route path='/pageFeatures' element={<PageFeatures/>} />
        <Route path='/blogs' element={<Blog/>} />
       </Routes>
      
      <Dark/>
      </BrowserRouter>
    </div>
  )
}

export default App
