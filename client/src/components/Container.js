import React from 'react'
import { connect } from 'react-redux'

import { updateAuth } from '../actions'

import Search from './Search'
import Select from './Select'
import NoteMenu from './NoteMenu'
import NoteContainer from './NoteContainer'

import './styles/Container.css'

class Container extends React.Component {
  componentDidMount () {
    fetch('/auth/ping', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      if (res.err) console.log(res.err)
      else this.props.updateAuth(res)
    })
  }

  render() {
    return (
      <div className='oContainer'>
        {/* <div>
          <button onClick={this.handleClick.bind(this)}>Check Auth</button>
          <br />
          <a href='http://localhost:5000/auth/github'>
            [DEV] Login With Github
          </a>
          <br />
          <a href='/auth/github'>
            [GLITCH] Login With Github
          </a>
        </div> */}
        <div className='col left'>
          <Search />
          <Select />
        </div>
        <div className='col right'>
          <NoteMenu />
          <NoteContainer />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  updateAuth: payload => dispatch(updateAuth(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Container)
