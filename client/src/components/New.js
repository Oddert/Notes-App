import React from 'react'
import { connect } from 'react-redux'

import { newNote } from '../actions'

import './styles/New.css'

class New extends React.Component {
  handleClick () {
    fetch('/api/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({})
    })
    .then(res => res.json())
    .then(res => {
      if (res.err) console.log(res.err)
      else this.props.newNote(res.note)
    })
  }

  render () {
    return (
      <button onClick={this.handleClick.bind(this)} className='new'>+</button>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  newNote: payload => dispatch(newNote(payload))
})

export default connect(null, mapDispatchToProps)(New)
