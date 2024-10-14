import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

import AppRoutes from './AppRoutes'

function App () {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading....</h1>}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
