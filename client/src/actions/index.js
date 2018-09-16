import {
  GET_NOTES,
  NEW_NOTE,
  SELECT_NOTE,
  UPDATE_NOTE,
  SAVE_NOTE,
  RESAVE_NOTE,
  SEARCH,
  DELETE_NOTE,
  UPDATE_AUTH,
  REARRANGE_NOTES,
  UPDATE_TAGS
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

export const search = payload => ({
  type: SEARCH,
  payload
})

export const deleteNote = payload => ({
  type: DELETE_NOTE,
  payload
})

export const updateAuth = payload => ({
  type: UPDATE_AUTH,
  payload
})

export const rearrangeNotes = payload => ({
  type: REARRANGE_NOTES,
  payload
})

export const updateTags = payload => ({
  type: UPDATE_TAGS,
  payload
})
