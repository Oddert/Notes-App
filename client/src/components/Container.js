import React from 'react'

import Search from './Search'
import Select from './Select'
import NoteMenu from './NoteMenu'
import NoteContainer from './NoteContainer'

import './styles/Container.css'

class Container extends React.Component {
  // handleClick () {
  //   fetch('/api/newtest', {
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json' }
  //   })
  //   .then(res => res.json())
  //   .then(res => console.log(res))
  // }

  render() {
    return (
      <div className='oContainer'>
        {/* <button onClick={this.handleClick.bind(this)}>Test</button> */}
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
