
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle  from './styles/globalStyles'

import Rotas from './rootes/rootes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
       <Rotas />
     </BrowserRouter>
     <GlobalStyle />
  </React.StrictMode>
)
