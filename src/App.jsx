import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Services from "./pages/Services"
import About from "./pages/About"
import Contact from "./pages/Contact"
import PageNotFound from './pages/PageNotFound'
import WhatsAppButton from './components/WhatsAppButton'
function App() {


  return (
    <>
   
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='*' element={<PageNotFound/>} ></Route>
     </Routes>


     <WhatsAppButton/>
    </>
  )
}

export default App
