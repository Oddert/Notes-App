import React from 'react'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'

import { saveNote, resaveNote } from '../actions'

class Save extends React.Component {
  handleClick () {
    let idx = this.props.editor.open
    let item = Object.assign({}, this.props.notes[idx])
    delete item.unsaved
    console.log('going to send: ')
    console.log(idx)
    console.log(item)
    if (typeof idx === 'number') {
      fetch('/api/notes', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(item)
      })
      .then(res => res.json())
      .then( res => {
        console.log('Responce recieved...')
        console.log(res)
        if (res.err) console.log(res.err)
        else this.props.resaveNote({ idx, note: res.note })
      })
    }
  }

  render () {
    return (
      <button onClick={this.handleClick.bind(this)}>Save</button>
    )
  }
}

Save.propTypes = {
  notes: PropTypes.array.isRequired,
  editor: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  notes: state.notes,
  editor: state.editor
})

const mapDispatchToProps = dispatch => ({
  saveNote: payload => dispatch(saveNote(payload)),
  resaveNote: payload => dispatch(resaveNote(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Save)
