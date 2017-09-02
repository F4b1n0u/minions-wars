import Expo from 'expo'
import React, { Component } from 'react'
import styled from 'styled-components/native'
import { Provider } from 'react-redux'

import storeFactory from '@store'

import AppConponents from '@components/app'

const initialState = {}
const store = storeFactory(initialState)

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
