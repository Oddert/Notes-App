import React from 'react'

import Save from './Save'
import Delete from './Delete'
import Auth from './Auth'

import './styles/NoteMenu.css'

class NoteMenu extends React.Component {
  render() {
    return (
      <div className='noteMenu top'>
        <Save />
        <Delete />
        <Auth />
      </div>
    )
  }
}



export default NoteMenu
