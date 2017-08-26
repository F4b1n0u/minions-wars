import React from 'react'
import styled from 'styled-components/native'

const backgroundImage = require('../../assets/images/sky.png')

export default class SkyComponent extends React.Component {
  render() {
    return (
      <Sky/>
    )
  }
}

const Sky = styled.Image.attrs({
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
