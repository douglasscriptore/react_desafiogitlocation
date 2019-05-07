import { createStore, compose, applyMiddleware } from 'redux'

import reducers from './ducks'

const middlewares = []

const store = createStore(reducers)

export default store
