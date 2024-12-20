import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import './App.css'

function App() {

  return (
    <BrowserRouter className="relative " >
      <nav className='flex gap-x-4 font-bold bg-purple-200 fixed top-0 left-0 right-0 shadow-lg w-[70%] m-[auto] mt-[20px] p-[10px] shadow-gray-500 rounded-2xl justify-center '>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
      
      <div className='App'>
        <Routes> 
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
