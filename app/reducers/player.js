import { combineReducers } from 'redux'

import {
  player as initialPlayer,
  generateMaster,
  generateMinion,
 } from '@reducers/initial-state'

import minionReducer from '@reducers/minion'

import { START_GAME } from '@actions/game'

const amountOfMinions = 6

function master(
  state = initialPlayer.master,
  action,
) {
  switch (action.type) {
    case START_GAME:
      return generateMaster()
    default:
      return state
  }
}

function minions(
  state = initialPlayer.minions,
  action,
) {
  switch (action.type) {
    case START_GAME:
      return new Array(amountOfMinions)
        .fill('')
        .map(minionReducer.bind(null, generateMinion(), action));
    default:
      return state
  }
}

function cursor(
  state = initialPlayer.cursor,
  action,
) {
  switch (action.type) {
    case START_GAME:
      return initialPlayer.cursor
    default:
      return state
  }
}

export default combineReducers({
  master,
  minions,
  cursor,
})