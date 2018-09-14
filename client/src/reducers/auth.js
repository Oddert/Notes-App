import initialState from '../initialState'

import { UPDATE_AUTH } from '../actions/types'

const auth = (state = initialState.auth, action) => {
  switch (action.type) {
    case UPDATE_AUTH:
      console.log('auth reducer:')
      console.log(action.payload)
      return Object.assign({}, state, { isAuth: action.payload.isAuth })
    default:
      return state
  }
}

export default auth
