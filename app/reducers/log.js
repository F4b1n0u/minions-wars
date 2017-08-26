import {
  combineReducers,
} from 'redux'

function log(
  state = {},
  action,
) {
  console.log('action:', action)
  return state
}

export default combineReducers({
  log,
})
