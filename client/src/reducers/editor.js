import initialState from '../initialState'

import { NEW_NOTE, SELECT_NOTE } from '../actions/types'

const editor = (state = initialState.editor, action) => {
  switch (action.type) {
    case NEW_NOTE:
      return Object.assign({}, state, { open: 0, status: 'editing' })
    case SELECT_NOTE:
      return Object.assign({}, state, { open: action.payload })
    default:
      return state
  }
}

export default editor
