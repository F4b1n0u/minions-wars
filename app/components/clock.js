import React from 'react'
import styled from 'styled-components/native'

const backgroundImage = require('../../assets/images/clock.png')

export default class ClockComponent extends React.Component {
  render() {
    return (
      <Clock/>
    )
  }
}

const Clock = styled.Image.attrs({
  source: backgroundImage,
  resizeMode: 'cover',
  height: undefined,
  width: undefined,
})`
  height: 45;
  width: 45;
  position: absolute;
  left: 200;
  top: 25;
`
