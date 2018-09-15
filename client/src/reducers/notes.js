import initialState from '../initialState'

import {
  GET_NOTES,
  NEW_NOTE,
  UPDATE_NOTE,
  RESAVE_NOTE,
  DELETE_NOTE,
  REARRANGE_NOTES
} from '../actions/types'

const notes = (state = initialState.notes, action) => {
  switch (action.type) {
    case GET_NOTES:
      console.log('Adding notes from db')
      return [...state, ...action.payload]
    case NEW_NOTE:
    console.log('Adding new note')
      return [action.payload, ...state]
    case REARRANGE_NOTES:
      console.log('rearange notes')
      console.log(action.payload)
      return action.payload
    case UPDATE_NOTE:
      let updateNoteState = [...state]
      updateNoteState[action.payload.idx] = Object.assign({}, updateNoteState[action.payload.idx], {
        name: action.payload.name,
        body: action.payload.body,
        updated: Date.now(),
        unsaved: true
      })
      return updateNoteState
    case RESAVE_NOTE:
      console.log(action.payload)
      let resaveNoteState = [...state]
      resaveNoteState[action.payload.idx] = Object.assign(
        {},
        resaveNoteState[action.payload.idx],
        action.payload.note,
        {
          unsaved: false
        })
      return resaveNoteState
    case DELETE_NOTE:
      return [...state].slice(0, action.payload).concat([...state].slice(action.payload+1))
    default:
      return state
  }
}

export default notes
