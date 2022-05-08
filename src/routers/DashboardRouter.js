import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../pages/Cart'
import Header from '../components/Header'
import Home from '../pages/Home'
import Checkout from '../pages/Checkout'
import Order from '../pages/Order'

 export const DashBoardRouter = () => {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
    </>
  )
}