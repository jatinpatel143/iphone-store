import React from 'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Mac from './Pages/Mac'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Support from './Pages/Support'
import About from './Pages/About'
import Cart from './Pages/Cart'




const App = () => {
  return (
<BrowserRouter>
  <Navbar/>
  <Routes>
  <Route path='/' element ={<Home/>}/>
    <Route path='/Home' element ={<Home/>}/>
    <Route path='/' element ={<Home/>}/>
    <Route path='/Mac' element ={<Mac/>}/>
    <Route path='/About' element ={<About/>}/>
    <Route path='/Support' element ={<Support/>}/>
    <Route path='/Saved' element ={<Cart/>}/>
  </Routes>
</BrowserRouter>
  )
}

export default App