import Expo from 'expo'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import styled from 'styled-components/native'

import rootEpic from '@epics'
import rootReducer from '@reducers'

import AppConponents from '@components/app'

const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware)
);

export default class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

const App = styled(AppConponents)`
  flex: 1;
`

Expo.registerRootComponent(Index)
