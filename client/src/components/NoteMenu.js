import React from 'react'
import { connect } from 'react-redux'

import { newNote } from '../actions'

import Save from './Save'

import './styles/NoteMenu.css'

class NoteMenu extends React.Component {
  handleClick () {
    fetch('/api/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({})
    })
    .then(res => res.json())
    .then(res => {
      if (res.err) console.log(res.err)
      else this.props.newNote(res.note)
    })
  }

  render() {
    return (
      <div className='noteMenu'>
        <button onClick={this.handleClick.bind(this)}>+</button>
        <Save />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  newNote: payload => dispatch(newNote(payload))
})

export default connect(null, mapDispatchToProps)(NoteMenu)
