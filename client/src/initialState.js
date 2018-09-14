const initialState = {
  notes: [],
  editor: {
    open: null,
    status: 'none'
  },
  search: '',
  auth: {
    isAuth: false,
    user: {
      notes: [],
      username: ''
    }
  }
}

export default initialState
