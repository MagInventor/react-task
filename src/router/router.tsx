import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from '../components/Layout'
import Homepage from '../pages/Homepage'
import Aboutpage from '../pages/Aboutpage'
import Formpage from '../pages/Formpage'
import Notfoundpage from '../pages/Notfoundpage'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="about" element={<Aboutpage />} />
        <Route path="form" element={<Formpage />} />
        <Route path="*" element={<Notfoundpage />} />
      </Route>
    </Routes>
  )
}

export default Router
