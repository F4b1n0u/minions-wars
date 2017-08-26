// types:
// FIRE
// WATER
// WOOD
// METAL
// EARTH

export default {
  app: {
    isReady: true,
  },
  game: {
    isRunning: false,
    roundDuration: 2000,
    players:[{
      master: { 
        type: 'FIRE',
        health: 10,
        cursor: 0,
      },
      minions: [{
        type: 'FIRE',
        health: 1,
      }, {
        type: 'WATER',
        health: 2,
      }, {
        type: 'METAL',
        health: 3,
      }]
    }, {
      master: { 
        type: 'WATER',
        health: 10,
        cursor: 1,
      },
      minions: [{
        type: 'WATER',
        health: 1,
      }, {
        type: 'METAL',
        health: 3,
      }, {
        type: 'FIRE',
        health: 2,
      }]
    }]
  },
}