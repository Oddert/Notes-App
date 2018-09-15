import React from 'react'
import { connect } from 'react-redux'

import { selectNote } from '../actions'

import './styles/selectNote.css'

class SelectNote extends React.Component {
  render () {
    if (this.props.hidden) return <div />
    let note = this.props.notes[this.props.index];
    let classInput = this.props.editor.open === this.props.index
                      ? 'selectNote active'
                      : 'selectNote'
    return (
      <li
        onClick={() => this.props.selectNote(this.props.index)}
        className={classInput}
      >
        <div className='preview-text'>
          {note.title !== "" ? <p className='select-title'>{this.props.item.name}</p> : ''}
          {note.body !== "" ? <p className='select-body'>{note.body.substring(0, 40)}{note.body.length > 40 ? '...' : ''}</p> : ''}
        </div>
        <div className='save-indicator'>
          {note.unsaved ? ' •' : ''}
        </div>
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
