import initialState from '../initialState'

import { GET_NOTES, NEW_NOTE, UPDATE_NOTE } from '../actions/types'

const notes = (state = initialState.notes, action) => {
  switch (action.type) {
    case GET_NOTES:
      console.log('Adding notes from db')
      return [...state, ...action.payload]
    case NEW_NOTE:
    console.log('Adding new note')
      return [action.payload, ...state]
    case UPDATE_NOTE:
      console.log(action.payload)
      let newState = [...state]
      newState[action.payload.idx] = Object.assign({}, newState[action.payload.idx], {
        name: action.payload.name,
        body: action.payload.body,
        updated: Date.now,
        unsaved: true
      })
      return newState
    default:
      return state
  }
}

export default notes
