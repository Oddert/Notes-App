import React from 'react'

import { connect } from 'react-redux'

import SelectNote from './SelectNote'

import './styles/Select.css'

class Select extends React.Component {
  render () {
    return (
      <div className='select'>
        <p>Menu select: </p>
        <ul>
          {this.props.notes.length > 0
            ? this.props.notes.map((each, idx) =>
              <SelectNote key={idx} index={idx} item={each} />
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
