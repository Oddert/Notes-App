import { GET_NOTES, NEW_NOTE } from './types'

export const getNotes = payload => ({
  type: GET_NOTES,
  payload
})

export const newNote = () => ({
  type: NEW_NOTE
})
