import React from 'react'
import './App.css'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Header from './common/Header'
import Footer from './common/Footer'
import Services from './pages/Services'
import Contact from './pages/Contact'

const Home = React.lazy(()=> import('./pages/Home'))

function App() {
  

  return (
    <div className='bg-[#fffcf2]'>
      <Router>
        <Header />
        <div className=''>

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/our-services' element={<Services />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
        </div>
        <Footer />
      </Router>
    
    </div>
  )
}

export default App
