import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/nav'
import Hero from './components/Hero'
import Skill from './components/Skill'
import Exp from './components/Exp'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skill2 from './components/Skill2'
import Top from './components/Top'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container-fluid px-0">
      <Nav></Nav>
      <Top/>
      <Hero></Hero>
      <Skill></Skill>
      {/* <Skill2/> */}
      <Exp></Exp>
      <About></About>
      <Project></Project>
      <Contact></Contact>
      <Footer/>
    </div>
    </>
  )
}

export default App
