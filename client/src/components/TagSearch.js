import React from 'react'
import { connect } from 'react-redux'

import { updateTags } from '../actions'

import './styles/TagSearch.css'

class TagSearch extends React.Component {
  render () {
    return (
      <div className='tagSearch'>
        <textarea
          ref={e => this.search = e}
          onChange={() => this.props.updateTags(this.search.value.split(', '))}
          placeholder='Tags '
          rows='1'
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateTags: payload => dispatch(updateTags(payload))
})

export default connect(null, mapDispatchToProps)(TagSearch)
