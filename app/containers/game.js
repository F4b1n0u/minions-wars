import React from 'react';
import { connect } from 'react-redux'

import { 
  isRunning,
} from '@selectors/app'

import {
  startGame,
  stopGame,
} from '@actions/games'

import Game from '@components/game'

const mapStateToProps = state => {
  return ({
    isRunning: isRunning(state.game),
  })
}

const mapDispatchToProps = dispatch => ({
  startGame: () => dispatch(startGame()),
  stopGame: () => dispatch(stopGame()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Game)
