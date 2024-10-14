import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { LANDING_ROUTE } from '../utils/routes'

const Home = React.lazy(() => import('../pages/index'))
const NotFound = React.lazy(() => import('../pages/NotFound'))

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={LANDING_ROUTE} element={<Home />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
