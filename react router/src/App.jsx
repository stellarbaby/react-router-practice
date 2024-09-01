import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Router/Home'
import Dashboard from './Router/Dashboard'
import Contact from './Router/Contact'
import About from './Router/About'
import Profile from './Router/Profile'
import Navbar from './Router/Navbar'
import Product from './Router/Product'
import Orders from './Router/Orders'
import NotFound from './Router/NotFound'

function App() {
return (
  <BrowserRouter>
   <Navbar> </Navbar>

     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/dashboard' element={<Dashboard />}>
         <Route index element={<Home />}></Route>
         <Route path='product' element= {<Product />}></Route>
         <Route path='orders' element={<Orders />}></Route>
      </Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/profile/:id' element={<Profile />}></Route>
      <Route path='"' element={<NotFound />}></Route>
     </Routes>
  </BrowserRouter>

)
  
}

export default App;
