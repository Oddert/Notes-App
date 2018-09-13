import {
  GET_NOTES,
  NEW_NOTE,
  SELECT_NOTE,
  UPDATE_NOTE,
  SAVE_NOTE,
  RESAVE_NOTE
} from './types'

export const getNotes = payload => ({
  type: GET_NOTES,
  payload
})

export const newNote = payload => ({
  type: NEW_NOTE,
  payload
})

export const selectNote = payload => ({
  type: SELECT_NOTE,
  payload
})

export const updateNote = payload => ({
  type: UPDATE_NOTE,
  payload
})

export const saveNote = payload => ({
  type: SAVE_NOTE,
  payload
})

export const resaveNote = payload => ({
  type: RESAVE_NOTE,
  payload
})
