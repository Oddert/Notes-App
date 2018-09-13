import React from 'react'
import { connect } from 'react-redux'

import { selectNote } from '../actions'

class SelectNote extends React.Component {
  render () {
    let note = this.props.notes[this.props.index];
    let classInput = this.props.editor.open === this.props.index
                      ? {border: '1px solid steelblue'}
                      : {}
    return (
      <li
        onClick={() => this.props.selectNote(this.props.index)}
        className={classInput}
      >
        {this.props.item.name}
        {note.unsaved ? ' ·' : ''}
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
