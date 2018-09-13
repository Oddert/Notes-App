import React from 'react'
import { connect } from 'react-redux'

import { search } from '../actions'

import New from './New'

import './styles/Search.css'

class Search extends React.Component {
  render() {
    return (
      <div className='search top'>
        <input
          type='text'
          ref={e => this.search = e}
          onChange={() => this.props.search(this.search.value)}
          placeholder='Search'
        />
        <New />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  search: payload => dispatch(search(payload))
})

export default connect(null, mapDispatchToProps)(Search)
