import React from 'react'
import styled from 'styled-components/native'
import {
  default as Expo,
  Font,
} from 'expo'

import Game from '@containers/game'

export default class AppComponents extends React.Component {
  state = {
    isFontLoaded: true,
  }

  // async componentDidMount() {
  //   await Font.loadAsync({
  //     'let-that-be-enough-regular': require('../../assets/fonts/let-that-be-enough.regular.ttf'),
  //   })

  //   this.setState({ isFontLoaded: true })
  // }

  render() {
    const {
      isFontLoaded = true,
    } = this.state

    return (isFontLoaded) ?
      (
        <Game />
      ) : (
        <Expo.AppLoading />
      )
  }
}

const App = styled.View`
  flex: 1;
`
