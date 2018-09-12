import React from 'react'

import { connect } from 'react-redux'

import { getNotes } from '../actions'

import Note from './Note'

import './styles/NoteContainer.css'

class NoteContainer extends React.Component {
  componentDidMount() {
    fetch('/api/notes', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(res => {
      if (res.err) console.log(res.err)
      else this.props.getNotes(res.notes)
    })
  }

  render() {
    return (
      <div className='noteContainer'>
        Status: {this.props.status}
        {this.props.open
          ? <Note />
          : <div>Open a Note to Get Started</div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  notes: state.notes,
  open: state.open,
  status: state.status
})

const mapDispatchToProps = dispatch => ({
  getNotes: payload => dispatch(getNotes(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteContainer)