import {
  combineReducers,
} from 'redux'

import initialState from '@reducers/initial-state'

// import {
//   SHOW_GAME_DETAILS,
//   HIDE_GAME_DETAILS,
// } from '@actions/games'

function isRunning(
  state = initialState.game.isRunning,
  action,
) {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({
  isRunning,
})
