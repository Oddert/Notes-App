import React from 'react'

import { connect } from 'react-redux'

class Select extends React.Component {
  render () {
    return (
      <div>
        <p>Menu select: </p>
        <ul>
          {this.props.notes.length > 0
            ? this.props.notes.map(each =>
              <li key={each.name}>{each.name}</li>
            )
            : <div>No Items</div>}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  notes: state.notes
})

export default connect(mapStateToProps, null)(Select)
