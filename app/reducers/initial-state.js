import _ from 'lodash'

export function getRandomHealth(max) {
  max = Math.floor(max);
  return Math.floor(Math.random(Date.now()) * max) + 1
}

export function getRandomType() {
  min = 0;
  max = 6;
  let type
  const indice = getRandomHealth(5);
  switch(indice) {
    case 1:
      return 'FIRE'
    case 2:
      return 'WATER'
    case 3:
      return 'WOOD'
    case 4:
      return 'METAL'
    case 5:
      return 'EARTH'
  }
}

export const generateApp = () => ({
  isReady: true,
})

export const generateCreature = (health) => ({
  type: getRandomType(),
  health,
})

export const generateMaster = () => generateCreature(10)

export const generateMinion = () => generateCreature(getRandomHealth(3))

export const generatePlayer = () => ({
  master: {},
  minions: [],
  cursor: 0,
})

export const generateGame = () => ({
  isRunning: false,
  roundDuration: 2000,
  players:[
    player(),
    player()
  ]
})

export const app = {
  isReady: true,
}

export const game = {
  isRunning: false,
  roundDuration: 2000,
  players: [],
}

export const player = {
  master: null,
  minions: [],
  cursor: 0,
}

export const minion = {
  type: null,
  health: null,
}