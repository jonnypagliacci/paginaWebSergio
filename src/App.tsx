import NavBar from "./component/navBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import QuienesSomos from "./pages/quienesSomos";
import Servicios from "./pages/servicios";
import Contacto from "./pages/contacto";
import Wats from "./component/watsButton";


function App() {
  return (
    <>
    <NavBar/>
    <Routes>
    <Route path="/" element={<Home/>} ></Route>
      <Route path="/home" element={<Home/>} ></Route>
      <Route path="/quienessomos" element={<QuienesSomos/>} ></Route>
      <Route path="/servicios" element={<Servicios/>} ></Route>
      <Route path="/contacto" element={<Contacto/>} ></Route>
    </Routes>
    <Wats/>
    </>
  )
}

export default App;
