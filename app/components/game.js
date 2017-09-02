import React from 'react'
import styled from 'styled-components/native'

import PlayerContainer from '@containers/player'

import FloorComponent from '@components/floor'
import SkyComponent from '@components/sky'
import ClockComponent from '@components/clock'

export default class GameComponent extends React.Component {
  constructor(props) {
    super(props)

    this._handlePressStart = this._handlePressStart.bind(this)
  }

  _handlePressStart = () => {
    const {
      startGame,
    } = this.props

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
          <Sky />
          <Floor />
          <Clock />
          <Player1 left={50} />
          <Player2 right={50} />
        </Wrapper>
      )
    )
  }
}

const Wrapper = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`

const StartButton = styled.Button.attrs({
  title: 'start game',
})`
`

const Floor = styled(FloorComponent)``

const Sky = styled(SkyComponent)``

const Clock = ClockComponent.extend`
  position: absolute;
  left: 200;
  top: 25;
`

const Player1 = styled(PlayerContainer).attrs({
  left: 50,
  position: 0,
})``

const Player2 = styled(PlayerContainer).attrs({
  right: 50,
  position: 1,
})``
