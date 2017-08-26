import React from 'react'
import styled from 'styled-components/native'

import FloorComponent from '@components/floor'
import SkyComponent from '@components/sky'
import ClockComponent from '@components/clock'

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
        <Status>
          {`isRunning: ${isRunning}`}
        </Status>
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

const Clock = styled(ClockComponent)`
`



