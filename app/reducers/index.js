import { combineReducers } from 'redux'

import log from '@reducers/log'
import game from '@reducers/game'

export default combineReducers({
  game,
})
