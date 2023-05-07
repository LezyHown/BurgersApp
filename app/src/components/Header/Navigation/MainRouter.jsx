import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import HomePage from '../../Pages/Home/Home';
import ContactPage from '../../Pages/Contact/Contact';
import Menu from '../../Pages/Menu/Menu';
import About from '../../Pages/About/About';
import Reservation from '../../Pages/Reservation/Reservation';

/**
 * Основная маршрутизация по контенту сайта
 */
export default function MainRouter() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/about" element={<About />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="*" element={<Navigate to="/home"/>}></Route>
    </Routes>
  )
}