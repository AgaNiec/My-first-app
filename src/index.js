import React from 'react'
import ReactDOM from 'react-dom'

import Homepage from './pages/HomePage'
import './assets/styles/reset.css'

import { unregister as unregisterServiceWorker } from './utils/serviceWorker'

ReactDOM.render((
  <Homepage />
), document.getElementById('root'))

unregisterServiceWorker()
