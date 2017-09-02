import React from 'react'
import styled from 'styled-components/native'

const backgroundImage = require('../../assets/images/clock.png')

const Clock = styled.Image.attrs({
  source: backgroundImage,
  resizeMode: 'cover',
  height: undefined,
  width: undefined,
})`
  height: 45;
  width: 45;
`
export default Clock