import React from 'react'
import styled from 'styled-components/native'

import FloorComponent from '@components/floor'
import SkyComponent from '@components/sky'

export default class GameComponents extends React.Component {
  render() {
    const {
      isRunning
    } = this .props

    return (
      <Wrapper>
        <Status>
          {`isRunning: ${isRunning}`}
        </Status>
        <Sky />
        <Floor />
      </Wrapper>
    )
  }
}

const Wrapper = styled.View`
  flex: 1;
`

const Status = styled.Text`
  height: 40;
`
const Floor = styled(FloorComponent)`
`

const Sky = styled(SkyComponent)`
`



