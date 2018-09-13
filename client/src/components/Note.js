import React from 'react'
import { connect } from 'react-redux'

import { updateNote } from '../actions'

import './styles/Note.css'

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idx: null,
      edited: false,
      name: '',
      body: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount () {
    this.componentDidUpdate()
  }

  componentDidUpdate () {
    var note = this.props.notes[this.props.editor.open];

    if (this.state.idx !== this.props.editor.open) {
      // if (this.state.edited) this.props.updateNote(this.state)
      this.setState({
        idx: this.props.editor.open,
        name: note.name,
        body: note.body,
        edited: false
      })
    }
  }

  handleChange (e) {
    this.setState(
      {
        [e.target.name]: e.target.value,
        edited: true
      },
      () => this.props.updateNote(this.state)
    )
  }

  render() {
    var idx = this.props.editor.open > this.props.notes.length -1
                ? this.props.notes.length-1
                : this.props.editor.open
    var note = this.props.notes[idx];

    return (
      <div className='note'>
        <textarea name='name' className='title' onChange={this.handleChange} value={this.state.name} rows='1' />
        <div className='title-meta'>
          <p>{new Date(note.updated).toLocaleDateString('en-GB')}</p>
          <p>{new Date(note.updated).toLocaleTimeString('en-GB').substring(0, 5)}</p>
        </div>
        <textarea name='body' className='body' onChange={this.handleChange} value={this.state.body} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  notes: state.notes,
  editor: state.editor
})

const mapDispatchToProps = dispatch => ({
  updateNote: payload => dispatch(updateNote(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Note)
