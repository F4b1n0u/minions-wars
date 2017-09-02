import {
  EARTH,
  FIRE,
  METAL,
  WATER,
  WOOD,
} from '@utils/types'

const typesEffectMap = {
  'EARTH': {
    isBeatenBy: WOOD,
    beats: WATER,
    produces: METAL,
    isProduceBy: FIRE,
  },
  'FIRE': {
    isBeatenBy: WATER,
    beats: METAL,
    produces: EARTH,
    isProduceBy: WOOD,
  },
  'METAL': {
    isBeatenBy: FIRE,
    beats: WOOD,
    produces: WATER,
    isProduceBy: EARTH,
  },
  'WATER': {
    isBeatenBy: EARTH,
    beats: FIRE,
    produces: WOOD,
    isProduceBy: METAL,
  },
  'WOOD': {
    isBeatenBy: METAL,
    beats: EARTH,
    produces: FIRE,
    isProduceBy: WATER,
  },
}