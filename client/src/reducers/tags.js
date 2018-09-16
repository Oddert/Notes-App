import { UPDATE_TAGS } from '../actions/types'

const tags = (state = [], action) => {
  switch (action.type) {
    case UPDATE_TAGS:
      return action.payload
    default:
      return state
  }
}

export default tags
