import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Cookie from "./pages/cookie";
import Brownie from "./pages/brownie";
import Cupcake from "./pages/cupcake";
import Cake from "./pages/cake";
import OwnRecipe from './pages/ownRecipe';
// import Footer from './components/footer'


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cookie" element={<Cookie />} />  
          <Route path="/brownie" element={<Brownie/>} /> 
          <Route path="/cupcake" element={<Cupcake/>} /> 
          <Route path="/cake" element={<Cake/>} /> 
          <Route path="/OwnRecipe" element={<OwnRecipe/>} /> 

        </Routes>
 
    </BrowserRouter>
  );
}

export default App;
