import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/home/Home"
import { Login } from "./pages/login/Login"
import { Grocery } from "./pages/grocery/Grocery"
import { Pantry } from "./pages/pantry/Pantry"
import { NotFound } from "./pages/notFound/NotFound"
import { NavBar } from "./shared/components/NavBar"

function App() {
  return (
    <> 
    <BrowserRouter>
      <NavBar/>
      <div className="page">
      <Routes>
        <Route path="/login" element={<Login/>} />    
        <Route path="/home" element={<Home/>} />
        <Route path="/grocery" element={<Grocery/>} />
        <Route path="/pantry" element={<Pantry/>} />        
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
