import initialState from '../initialState'

import { SEARCH } from '../actions/types'

const search = (state = initialState.search, action) => {
  switch (action.type) {
    case SEARCH:
      return action.payload
    default:
      return state
  }
}

export default search
