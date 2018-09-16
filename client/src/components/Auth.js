import React from 'react'
import { connect } from 'react-redux'

import './styles/Auth.css'

class Auth extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      open: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({ open: !this.state.open })
  }

  render () {
    if (!this.props.auth.isAuth) {
      return (
        <div className='auth'>
          <a href='http://localhost:5000/auth/github' className='github-login'>
            <i className='fa fa-github'></i> Login With Github
          </a>
        </div>
      )
    }

    return (
      <div className='auth'>
        <button onClick={this.handleClick} className='drop-button'>
          {this.props.auth.user.username + ' '}
          <i className={this.state.open ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
        </button>
        {this.state.open
          ? <div className='account dropdown'>
              <a href='/logout'>Logout</a>
            </div>
          : ''}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, null)(Auth)
