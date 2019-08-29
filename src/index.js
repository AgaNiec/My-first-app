import React from 'react'
import ReactDOM from 'react-dom'

import './assets/styles/reset.css'
import './assets/styles/general.css'

import Homepage from './pages/HomePage'

import { unregister as unregisterServiceWorker } from './utils/serviceWorker'

ReactDOM.render((
  <Homepage />
), document.getElementById('root'))

unregisterServiceWorker()
