// as variaiveis compose e applyMiddleware foram chamadas para importar o reactotron
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from './ducks'
import sagas from './sagas'

//
const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null
// inicia o middleware do redux-saga
const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
// cria um array de middlewares com o sagamiddleware
const middlewares = [sagaMiddleware]

// caso o ambiente for de desenvolvuimento envia log para o reactotron
// define os middlewares do redux
const composer =
  process.env.NODE_ENV === 'development'
    ? compose(
      applyMiddleware(...middlewares),
      console.tron.createEnhancer()
    )
    : applyMiddleware(...middlewares)

const store = createStore(reducers, composer)
sagaMiddleware.run(sagas)

export default store
