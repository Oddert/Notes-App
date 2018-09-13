import React from 'react'

import { connect } from 'react-redux'

import SelectNote from './SelectNote'

import './styles/Select.css'

class Select extends React.Component {
  render () {
    let notes = [...this.props.notes]

    return (
      <div className='select'>
        <p>Menu select: </p>
        <ul>
          {this.props.notes.length > 0
            ? this.props.notes
              .filter(each => RegExp(this.props.search.toLowerCase(), "g").test(each.name.toLowerCase()) || RegExp(this.props.search.toLowerCase(), "g").test(each.body.toLowerCase()))
              .map((each, idx) =>
                <SelectNote key={idx} index={idx} item={each} />
              )
            : <div>No Items</div>}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  notes: state.notes,
  search: state.search
})

export default connect(mapStateToProps, null)(Select)
