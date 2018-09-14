import React from 'react'
import { connect } from 'react-redux'

import { deleteNote } from '../actions'

class Delete extends React.Component {
  handleClick () {
    let idx = this.props.editor.open
    let item = this.props.notes[idx]
    console.log('Going to delete: ');
    console.log(idx)
    console.log(item)

    fetch('/api/notes', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(item)
    })
    .then(res => res.json())
    .then(res => {
      if (res.err) { console.log(res.err)
      } else {
        console.log(res)
        this.props.deleteNote(idx)
      }
    })
  }

  render () {
    return (
      <button onClick={this.handleClick.bind(this)}>Delete</button>
    )
  }
}

const mapStateToProps = state => ({
  notes: state.notes,
  editor: state.editor
})

const mapDispatchToProps = dispatch => ({
  deleteNote: payload => dispatch(deleteNote(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Delete)
