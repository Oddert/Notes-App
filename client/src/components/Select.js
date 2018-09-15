import React from 'react'

import { connect } from 'react-redux'

import SelectNote from './SelectNote'

import './styles/Select.css'

class Select extends React.Component {
  render () {
    const searchTerm = RegExp(this.props.search.toLowerCase(), "g")
    return (
      <div className='select'>
        <ul>
          {this.props.notes.length > 0
            ? this.props.notes
              .map((each, idx) => {
                let hidden = searchTerm.test(each.name.toLowerCase()) || searchTerm.test(each.body.toLowerCase())
                return <SelectNote key={idx} index={idx} item={each} hidden={!hidden} />
              })
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
