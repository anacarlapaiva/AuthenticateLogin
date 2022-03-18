import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../Pages/LoginPage'
import HomePage from '../Pages/HomePage'

const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Router