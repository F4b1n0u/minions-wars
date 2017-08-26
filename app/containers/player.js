import React from 'react';
import { connect } from 'react-redux'

import { 
  getPlayer,
} from '@selectors/game'

import {
  getMaster,
  getMinions,
  getCursorPosition,
} from '@selectors/player'

import Player from '@components/player'

const mapStateToProps = (state, ownProps) => {
  const {
    position,
  } = ownProps

  const playerState = getPlayer(state.game, position)
  
  return ({
    master: getMaster(playerState),
    minions: getMinions(playerState),
    cursorPosition: getCursorPosition(playerState),
  })
}

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player)
