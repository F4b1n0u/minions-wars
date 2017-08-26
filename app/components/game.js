import React from 'react'
import styled from 'styled-components/native'

import Player from '@containers/player'

export default class GameComponent extends React.Component {
  constructor(props) {
    super(props)

    this._handlePressStart = this._handlePressStart.bind(this)
  }

  _handlePressStart = () => {
    const {
      startGame,
    } = this .props

    startGame()
  }
  
  render() {
    const {
      isRunning,
    } = this .props

    return (
      (!isRunning) ? (
        <StartButton
          onPress={this._handlePressStart}
        />
      ) : (
        <Wrapper>
          <Player
            position={0}
          />
          <Player
            position={1}
          />
        </Wrapper>
      )
    )
  }
}

const Wrapper = styled.View`
  flex: 1;
`

const StartButton = styled.Button.attrs({
  title: 'start game',
})`
`