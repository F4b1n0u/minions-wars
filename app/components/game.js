import React from 'react'
import styled from 'styled-components/native'

export default class GameComponents extends React.Component {
  render() {
    const {
      isRunning
    } = this .props

    return (
      <Status>
        {`isRunning: ${isRunning}`}
      </Status>
    )
  }
}

const Status = styled.Text`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
