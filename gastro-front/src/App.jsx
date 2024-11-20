import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import About from './components/about/about'
import Blog from './components/blog/blog'
import Lanch from './components/lanch/lanch'
import Program from './components/program/program'
import Shop from './components/shop/shop'
import {
  Route,
  BrowserRouter,
  Routes
} from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/Program' element={<Program/>}/>
            <Route path='/Lanch' element={<Lanch/>}/>
            <Route path='/Shop' element={<Shop/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Blog' element={<Blog/>}/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
