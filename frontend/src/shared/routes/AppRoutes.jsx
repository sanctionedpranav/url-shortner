import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Login from '../../modules/user/pages/Login'
import Register from '../../modules/user/pages/Register'
import UrlShort from '../../modules/urlshortner/pages/UrlShort'
import Dashboard from '../../modules/dashboard/Dashboard'
import AllUrl from '../../modules/urlshortner/pages/AllUrl'

const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/url-shortener" element={<UrlShort />} /> */}
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<UrlShort />} />
        <Route path="shorten" element={<UrlShort />} />
        <Route path="links" element={<AllUrl />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default AppRoutes
