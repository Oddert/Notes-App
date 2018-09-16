import React from 'react'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'

import { saveNote, resaveNote } from '../actions'

import './styles/Save.css'

class Save extends React.Component {
  handleClick () {
    let idx = this.props.editor.open
    let stateItem = this.props.notes[idx]
    console.log(stateItem)
    let item = Object.assign(
      {},
      stateItem
    )
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
      <button onClick={this.handleClick.bind(this)} className='icon'>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 145.84 145.84">
          <path className="save_icon-1" d="M608.18,329.56a11.37,11.37,0,0,0-11.34-11.34H496.79a11.37,11.37,0,0,0-11.34,11.34V429.61A11.37,11.37,0,0,0,496.79,441H560c6.24,0,14.95-3.61,19.36-8l20.79-20.79c4.41-4.41,8-13.12,8-19.36V329.56Z" transform="translate(-480.45 -313.22)"/>
          <line className="save_icon-2" x1="100" y1="56.68" x2="32.73" y2="56.68"/>
          <line className="save_icon-2" x1="100" y1="86" x2="32.73" y2="86"/>
          <line className="save_icon-2" x1="100" y1="27.36" x2="32.73" y2="27.36"/>
        </svg>
      </button>
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
