import React from 'react';
import { connect } from 'react-redux'

import { 
  isRunning,
} from '@selectors/game'

import {
  startGame,
  stopGame,
} from '@actions/game'

import Game from '@components/game'

const mapStateToProps = state => ({
  isRunning: isRunning(state.game),
})

const mapDispatchToProps = dispatch => ({
  startGame: () => dispatch(startGame()),
  stopGame: () => dispatch(stopGame()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Game)
