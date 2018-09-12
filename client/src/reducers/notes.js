import initialState from '../initialState'

import { GET_NOTES } from '../actions/types'

const notes = (state = initialState.notes, action) => {
  switch (action.type) {
    case GET_NOTES:
    console.log('adding notes from db')
      return [...state, ...action.payload]
    default:
      return state
  }
}

export default notes
