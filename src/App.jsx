import React from "react"
import Nav from './Nav'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from './Home'
import Shop from './Shop'
import About from './About'
import Latest from './Latest'
import Blog from './Blog'
import Contact from './Contact'
import Login from './Login'
import Cart from './Cart'
import Search from './Search'



function App() {
  

  return (
    <>
    <BrowserRouter>

      <Nav></Nav>

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/shop" element={<Shop/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/latest" element={<Latest/>}></Route>
      <Route path="/blog" element={<Blog/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/search" element={<Search/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App


