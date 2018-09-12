import React from 'react'
import { connect } from 'react-redux'

import { newNote } from '../actions'

import './styles/NoteMenu.css'

class NoteMenu extends React.Component {
  handleClick () {
    fetch('/api/notes', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({})
    })
    .then(res => res.json())
    .then(res => console.log(res))
  }

  render() {
    return (
      <div className='noteMenu'>
        Note menu
        <button onClick={this.handleClick.bind(this)}>+</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  newNote: () => dispatch(newNote())
})

export default connect(null, mapDispatchToProps)(NoteMenu)
