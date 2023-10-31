import { useState } from 'react'
import { Nav } from './Components/Layout/Nav'
import 'bootstrap/dist/css/bootstrap.css';
import Inicio from './Components/Pages/Inicio';
import './estilo.css';
import { Footer } from './Components/Layout/footer';
function App() {


  return (
    <>
      <Nav/>
      <Inicio/>
      <Footer/>
    </>
  )
}

export default App
