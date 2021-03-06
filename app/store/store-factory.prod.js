import { compose, createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import rootEpic from '@epics'
import rootReducer from '@reducers'

export default function configureStore(initialState) {
  const epicMiddleware = createEpicMiddleware(rootEpic)
  const middlewares = [epicMiddleware]
  const enhancer = compose(
    applyMiddleware(...middlewares),
  )

  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  )

  return store
}
