import { combineReducers } from 'redux'

import notes from './notes'
import editor from './editor'
import search from './search'
import auth from './auth'
import tags from './tags'

const rootReducer = combineReducers ({
  notes,
  editor,
  search,
  auth,
  tags
})

export default rootReducer
