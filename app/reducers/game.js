import { combineReducers } from 'redux'

import playerReducer from '@reducers/player'

import {
  START_GAME,
  STOP_GAME,
} from '@actions/game'

import {
  game as initialGame,
  player as initialPlayer,
} from '@reducers/initial-state'

const amountOfPlayers = 2

function isRunning(
  state = initialGame.isRunning,
  action,
) {
  switch (action.type) {
    case START_GAME:
      return true
    case STOP_GAME:
      return false
    default:
      return state
  }
}

function roundDuration(
  state = initialGame.roundDuration,
  action,
) {
  switch (action.type) {
    default:
      return state
  }
}

function players(
  state = initialGame.players,
  action,
) {
  switch (action.type) {
    case START_GAME:
      return new Array(amountOfPlayers)
        .fill('')
        .map(playerReducer.bind(null, initialPlayer, action));
    case STOP_GAME:
      return initialGame.players
    default:
      return state
  }
}

export default combineReducers({
  isRunning,
  roundDuration,
  players,
})
