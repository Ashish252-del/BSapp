
import './App.css';
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from './Components/home';
import { Sell } from './Components/sell';
import { Buy } from './Components/buy';
import Aboutus from './Components/aboutus';
import ResponsiveAppBar from './Components/navbar';

function App() {
  const location = useLocation();
  return (
    <>
      <ResponsiveAppBar />
      {location.pathname === "/" ? <Home /> : null}
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Buy" element={<Buy/>} />
        <Route path="/Sell" element={<Sell />} />
       
        <Route path="/AboutUs" element={<Aboutus />} />
      </Routes>
    </>
  );
}

export default App;
