import React from 'react'
import { Provider } from 'react-redux'

import './config/ReactotronConfig'
import store from './store'

// importa arquivo de rotas
import Routes from './routes'

console.tron.log('Testando')

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

export default App
