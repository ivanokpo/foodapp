import React from "react";
import Home from "./Home";
import {Route, Routes, BrowserRouter, useLocation} from 'react-router-dom'
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";
const Pages = () => {
  const location = useLocation();
  const baseUrl = 'http://localhost:3001/recipes'
  return (
    <AnimatePresence exitBeforeEnter>  
    <Routes Location={location} key={location.pathname}>
        <Route path="/" element={<Home/>}/>
        <Route path="/cuisine/:type" element={<Cuisine/>}/>
        <Route path="/searched/:search" element={<Searched/>}/>
        <Route path='/recipes/:id' element={<Recipe/>}/>
    </Routes>
    </AnimatePresence>
    
  )
}

export default Pages