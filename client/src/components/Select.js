import React from 'react'
import { connect } from 'react-redux'

import TagSearch from './TagSearch'
import Order from './Order'

import SelectNote from './SelectNote'

import './styles/Select.css'

class Select extends React.Component {
  render () {
    const searchTerm = RegExp(this.props.search.toLowerCase(), "g")
    return (
      <div className='select'>
        <TagSearch />
        <Order />
        <ul>
          {this.props.notes.length > 0
            ? this.props.notes
              .map((each, idx) => {
                let show = searchTerm.test(each.name.toLowerCase()) || searchTerm.test(each.body.toLowerCase())

                if (this.props.tags.length > 0 && /\S/.test(this.props.tags[0])) {
                  if (each.tags.length > 0) {
                    this.props.tags.forEach(tag => each.tags.includes(tag) ? show=true : show=false)
                  } else {
                    show = false
                  }
                }

                return <SelectNote key={idx} index={idx} item={each} hidden={!show} />
              })
            : <div>No Items</div>}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  notes: state.notes,
  search: state.search,
  tags: state.tags
})

export default connect(mapStateToProps, null)(Select)
