import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Portfolio from './Pages/Portfolio/Portfolio'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <>
        <Helmet>
          <meta name="robots" content="noindex" />
        </Helmet>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App