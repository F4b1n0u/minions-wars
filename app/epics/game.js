import 'rxjs';
import _ from 'lodash'
import { combineEpics } from 'redux-observable'
import { Observable } from 'rxjs/Observable'

import {
  START_GAME,
  STOP_GAME,
} from '@actions/game'
import {
  startGame,
  stopGame,
  startMinionsFight,
} from '@actions/game'
import {
  getRoundDuration,
} from '@selectors/game'

const startGameEpic = (action$, store) => action$
  .ofType(START_GAME)
  .switchMap(() => {
    const gameState = store.getState().game
    const roundDuration = getRoundDuration(gameState)
    return Observable
      .interval(roundDuration)
      .mapTo(startMinionsFight())
      // .takeUntil(STOP_GAME)
  })

export default combineEpics(
  startGameEpic,
)
