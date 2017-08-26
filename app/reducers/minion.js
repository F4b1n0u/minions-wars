import { combineReducers } from 'redux'

import {
  minion as initialMinion,
  getRandomHealth,
  getRandomType,
} from '@reducers/initial-state'

import {
  START_GAME,
} from '@actions/game'

function type(
  state = initialMinion.type,
  action,
) {
  switch (action.type) {
    case START_GAME:
      return getRandomType()
    default:
      return state
  }
}

function health(
  state = initialMinion.health,
  action,
) {
  switch (action.type) {
    case START_GAME:
      return getRandomHealth(3)
    default:
      return state
  }
}

export default combineReducers({
  type,
  health,
})