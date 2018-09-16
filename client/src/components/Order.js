import React from 'react'
import { connect } from 'react-redux'

import { rearrangeNotes } from '../actions'

import './styles/Order.css'

class Order extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      active: 0
    }
    this.toggleOpen = this.toggleOpen.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  toggleOpen () {
    this.setState({ open: !this.state.open })
  }

  handleClick (e) {
    this.setState({ active: e })
    var newNotes = [...this.props.notes]

    switch (e) {
      case 0:
        newNotes = newNotes.sort((a, b) => a.name > b.name ? 1 : -1)
        break;
      case 1:
        newNotes = newNotes.sort((a, b) => a.name < b.name ? 1 : -1)
        break;
      case 2:
        newNotes = newNotes.sort((a, b) => new Date(a.updated) > new Date(b.updated) ? 1 : -1)
        break;
      case 3:
        newNotes = newNotes.sort((a, b) => new Date(a.updated) > new Date(b.updated) ? -1 : 1)
        break;
      case 4:
        newNotes = newNotes.sort((a, b) => new Date(a.created) > new Date(b.created) ? -1 : 1)
        break;
      case 5:
        newNotes = newNotes.sort((a, b) => new Date(a.created) > new Date(b.created) ? 1 : -1)
        break;
      default:
        break;
    }
    this.props.rearrangeNotes(newNotes)
    this.toggleOpen()
  }

  handleOutOfBounds (e) {
    if (e.target.className === 'order-back') this.toggleOpen()
  }

  render () {
    const options = [
      'Alphabetical A - z',
      'Alphabetical Z - a',
      'Recently Updated',
      'Oldest Updated',
      'Newer',
      'Older'
    ]
    return (
      <div className='order-container'>
        <button
          onClick={this.toggleOpen}
          className='drop-button'
        >
          Sort <i className={this.state.open ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
        </button>

        {this.state.open ?
          <div className='order-drop-container'>
            <div className='order-back' onClick={this.handleOutOfBounds.bind(this)} />
            <div className='temp'>
              <div className='dropdown order'>
                {options.map((each, idx) =>
                  <button
                    key={each}
                    onClick={() => this.handleClick(idx)}
                    className={this.state.active === idx
                                  ? 'order-option active'
                                  : 'order-option'}
                  >
                    {each}
                  </button>
                )}
              </div>
            </div>
            <div className='order-drop-counter' />
          </div> : ''}

      </div>
    )
  }
}

const mapStateToProps = state => ({
  notes: state.notes
})

const mapDispatchToProps = dispatch => ({
  rearrangeNotes: payload => dispatch(rearrangeNotes(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Order)
