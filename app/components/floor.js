import React from 'react'
import styled from 'styled-components/native'

const backgroundImage = require('../../assets/images/floor.png')

export default class FloorComponent extends React.Component {
  render() {
    // const {
    //   isRunning
    // } = this .props

    return (
      <Floor/>
    )
  }
}

const Floor = styled.Image.attrs({
  source: backgroundImage,
  resizeMode: 'cover',
  height: undefined,
  width: undefined,
})`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
`
