import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Podium from "./pages/Podium"
import Bid2Build from "./pages/Bid2Build"
import Cloudverse from "./pages/Cloudverse"
import Duocoding from "./pages/Duocoding"
import Techtune from "./pages/Techtune"
import Codecrush from "./pages/Codecrush"



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/event/podium' element={<Podium/>} />
        <Route path='/event/b2b' element={<Bid2Build/>} />
        <Route path='/event/codecrush' element={<Codecrush/>} />
        <Route path='/event/cloudverse' element={<Cloudverse/>} />
        <Route path='/event/techtune' element={<Techtune/>} />
        <Route path='/event/duocoding' element={<Duocoding/>} />
      </Routes>
    </>
  )
}

export default App
