import React from 'react'
import { connect } from 'react-redux'

import { selectNote } from '../actions'

import './styles/selectNote.css'

class SelectNote extends React.Component {
  render () {
    let note = this.props.notes[this.props.index];
    let classInput = this.props.editor.open === this.props.index
                      ? 'selectNote active'
                      : 'selectNote'
    return (
      <li
        onClick={() => this.props.selectNote(this.props.index)}
        className={classInput}
      >
        <p>{this.props.item.name} {note.unsaved ? ' •' : ''}</p>
        <p>{note.body.substring(0, 40)}{note.body.length > 40 ? '...' : ''}</p>
      </li>
    )
  }
}

const mapStateToProps = state => ({
  notes: state.notes,
  editor: state.editor
})

const mapDispatchToProps = dispatch => ({
  selectNote: payload => dispatch(selectNote(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectNote)
