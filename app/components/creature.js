import React from 'react'
import styled from 'styled-components/native'

import {
  EARTH,
  FIRE,
  METAL,
  WATER,
  WOOD,
} from '@utils/types'

const backgroundImage = require('../../assets/images/creatures/green/playerGreen_up1.png')

const creaturesType = {
  [FIRE]: {
    backgroundImage: require('../../assets/images/creatures/red/playerRed_up1.png'),
  },
  [WATER]: {
    backgroundImage: require('../../assets/images/creatures/blue/playerBlue_up1.png'),
  },
  [WOOD]: {
    backgroundImage: require('../../assets/images/creatures/green/playerGreen_up1.png'),
  },
  [METAL]: {
    backgroundImage: require('../../assets/images/creatures/grey/playerGrey_up1.png'),
  },
  [EARTH]: {
    backgroundImage: require('../../assets/images/creatures/green/playerGreen_up1.png'),
  }
}

export default styled.Image.attrs({
  resizeMode: 'cover',
  source: props => creaturesType[props.type].backgroundImage,
})``