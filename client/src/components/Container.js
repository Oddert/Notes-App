import React from 'react'

import Search from './Search'
import Select from './Select'
import NoteMenu from './NoteMenu'
import NoteContainer from './NoteContainer'

import './styles/Container.css'

class Container extends React.Component {
  // handleClick () {
  //   fetch('/auth/check', {
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json' },
  //     credentials: 'include',
  //     mode: 'no-cors'
  //   })
  //   .then(res => res.json())
  //   .then(res => console.log(res))
  // }

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

export default Container
