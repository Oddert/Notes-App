import { combineReducers } from 'redux'

import notes from './notes'
import editor from './editor'
import search from './search'

const rootReducer = combineReducers ({
  notes,
  editor,
  search
})

export default rootReducer
