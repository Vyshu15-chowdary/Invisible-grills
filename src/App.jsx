import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Services from "./pages/Services"
import About from "./pages/About"
import Contact from "./pages/Contact"
import PageNotFound from './pages/PageNotFound'
function App() {


  return (
    <>
    <h1>Jai Shri Shyam</h1>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='*' element={<PageNotFound/>} ></Route>
     </Routes>
    </>
  )
}

export default App
