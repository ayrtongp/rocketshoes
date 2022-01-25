import React from "react";
import { Route, Routes } from 'react-router-dom'

import Home from "./pages/Home";
import Cart from "./pages/Cart";

export default function Routers(params) {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  )
}
