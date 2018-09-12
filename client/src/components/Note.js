import React from 'react'
import { connect } from 'react-redux'

import { updateNote } from '../actions'

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
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  componentDidMount () {
    this.componentDidUpdate()
  }

  componentDidUpdate () {
    var note = this.props.notes[this.props.editor.open];

    if (this.state.idx !== this.props.editor.open) {
      console.log('Editor idx not the same, updating...')
      if (this.state.edited) this.props.updateNote(this.state)
      this.setState({
        idx: this.props.editor.open,
        name: note.name,
        body: note.body,
        edited: false
      })
    } else {
      console.log('Editor in sync')
    }
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value,
      edited: true
    })
  }

  handleKeyDown (e) {
    let char = String.fromCharCode(e.which).toLowerCase()
    console.log(char)
    if (e.ctrlKey) {
      console.log('# ctrl')
    }
    if (char === "s") {
      console.log('# s')
    }
    if (e.crtlKey && char === "s") {
      e.preventDefault()
      console.log('ctrl s pressed')
    }
  }

  render() {
    return (
      <div onKeyDown={this.handleKeyDown}>
        <p>Note index: {this.props.editor.open}</p>
        <label>Title: </label>
        <input name='name' onChange={this.handleChange} value={this.state.name} />
        <br />
        <label>Body: </label>
        <input name='body' onChange={this.handleChange} value={this.state.body} />
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
