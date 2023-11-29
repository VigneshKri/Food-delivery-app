import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Pages/Home/Homepage'

export default function AppRoutes() {
  return (
   <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/search/:searchTerm" element={<Homepage />} />
   </Routes>
  )
}
