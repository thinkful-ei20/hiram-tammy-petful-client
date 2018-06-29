import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import Dashboard from './Dashboard'
import dogs from './data/dogs'
import cats from './data/cats'

ReactDOM.render(
  <Dashboard catToAdopt={cats[0]} dogToAdopt={dogs[0]} />,
  document.getElementById('root')
)
registerServiceWorker()
