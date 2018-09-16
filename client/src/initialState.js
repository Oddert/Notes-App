const initialState = {
  notes: [],
  editor: {
    open: null,
    status: 'none'
  },
  search: '',
  tags: [],
  auth: {
    isAuth: false,
    user: {
      notes: [],
      username: ''
    }
  }
}

export default initialState
