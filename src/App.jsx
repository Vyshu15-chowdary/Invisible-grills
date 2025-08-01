import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Services from "./pages/Services"
import About from "./pages/About"
import Contact from "./pages/Contact"
import PageNotFound from './pages/PageNotFound'
import WhatsAppButton from './components/WhatsAppButton'
import CallMeButton from './components/CallMeButton'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import useWindowWidth from './hooks/useWindowWidth'
import { useState } from 'react'
import NavbarPhone from './components/NavbarPhone'
import ScrollToTop from './components/ScrollToTop'
import PhoneNavContent from './components/PhoneNavContent'

function App() {
  const [isActivePhoneNavbar, setIsActivePhoneNavbar] = useState(false);

  const width = useWindowWidth();
  const isPhone = width < 768;

  return (
    <>
    <ScrollToTop/>
    {isPhone?<NavbarPhone setIsActivePhoneNavbar={setIsActivePhoneNavbar}/>:<Navbar />}
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='*' element={<PageNotFound />} ></Route>
      </Routes>



      <WhatsAppButton />
      <CallMeButton />

      <PhoneNavContent isOpen={isActivePhoneNavbar} onClose={()=>{setIsActivePhoneNavbar(false)}}/>
      <Footer />
    </>
  )
}

export default App
