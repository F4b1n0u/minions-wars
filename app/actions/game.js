export const START_GAME           = 'minions-wars/app/START_GAME'
export const STOP_GAME            = 'minions-wars/app/STOP_GAME'
export const START_MINIONS_FIGHT  = 'minions-wars/app/START_MINIONS_FIGHT'

export const startGame = () => ({
  type: START_GAME,
})

export const stopGame = () => ({
  type: STOP_GAME,
})

// the order of minions determine the master of the minion
export const startMinionsFight = minions => ({
  type: START_MINIONS_FIGHT,
  minions,
})
