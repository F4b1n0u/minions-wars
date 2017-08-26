import { combineEpics } from 'redux-observable'

import gameEpic from '@epics/game'

export default combineEpics(
  gameEpic,
)
