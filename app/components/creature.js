import React from 'react'
import styled from 'styled-components/native'

const backgroundImage = require('../../assets/images/creatures/green/playerGreen_up1.png')

const Creature = styled.Image.attrs({
  resizeMode: 'cover',
  source: backgroundImage,
})``

export default Creature;