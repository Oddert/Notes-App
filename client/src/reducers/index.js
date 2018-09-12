import { combineReducers } from 'redux'

import notes from './notes'
import editor from './editor'

const rootReducer = combineReducers ({
  notes,
  editor
})

export default rootReducer
