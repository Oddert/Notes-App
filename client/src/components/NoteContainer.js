import React from 'react'

import { connect } from 'react-redux'

class NoteContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.open
          ? <div>A note is open</div>
          : <div>Open a Note to Get Started</div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  notes: state.notes,
  open: state.open
})

export default connect(mapStateToProps, null)(NoteContainer)
