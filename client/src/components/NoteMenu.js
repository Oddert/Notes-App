import React from 'react'

import Save from './Save'
import Delete from './Delete'
import Auth from './Auth'

import './styles/NoteMenu.css'

class NoteMenu extends React.Component {
  render() {
    return (
      <div className='noteMenu top'>
        <div className='noteMenu-options'>
          <Save />
          <Delete />
        </div>
        <Auth />
      </div>
    )
  }
}



export default NoteMenu
