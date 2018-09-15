import React from 'react'
import { connect } from 'react-redux'

class Auth extends React.Component {
  render () {
    if (!this.props.auth.isAuth) {
      return (
        <div>
          <a href='http://localhost:5000/auth/github'>
            [DEV] Login With Github
          </a>
        </div>
      )
    }

    return (
      <div>
        <button>{this.props.auth.user.username} <i className='fa fa-angle-down'></i></button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, null)(Auth)
