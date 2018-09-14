import { combineReducers } from 'redux'

import notes from './notes'
import editor from './editor'
import search from './search'
import auth from './auth'

const rootReducer = combineReducers ({
  notes,
  editor,
  search,
  auth
})

export default rootReducer
