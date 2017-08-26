import React from 'react'
import styled from 'styled-components/native'

import FloorComponent from '@components/floor'
import SkyComponent from '@components/sky'
import ClockComponent from '@components/clock'
import PlayerComponent from '@components/player'

export default class GameComponents extends React.Component {
  render() {
    const {
      isRunning
    } = this .props

    return (
      <Wrapper>
        <Sky />
        <Floor />
        <Clock />
        <Player1 left={50} />
        <Player2 right={50} />
      </Wrapper>
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

const Status = styled.Text`
  height: 40;
  position: absolute;
  margin-left: 150;
`
const Floor = styled(FloorComponent)``

const Sky = styled(SkyComponent)``

const Clock = ClockComponent.extend`
  position: absolute;
  left: 200;
  top: 25;
`

const Player1 = styled(PlayerComponent)``
const Player2 = styled(PlayerComponent)``



