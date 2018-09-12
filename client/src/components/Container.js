import React from 'react'

import Search from './Search'
import Select from './Select'
import NoteMenu from './NoteMenu'
import NoteContainer from './NoteContainer'

import './styles/Container.css'

class Container extends React.Component {
  render() {
    return (
      <div className='oContainer'>
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
