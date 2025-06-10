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
function App() {


  return (
    <>
   <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='*' element={<PageNotFound/>} ></Route>
     </Routes>


     <WhatsAppButton/>
     <CallMeButton/>
    </>
  )
}

export default App
