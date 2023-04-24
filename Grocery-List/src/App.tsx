import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login, Home, Grocery, Pantry, NotFound } from "./pages"
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
        <Route index element={<Home/>}/>
      </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
