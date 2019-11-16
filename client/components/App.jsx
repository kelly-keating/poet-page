import React from 'react'

import Header from './Header'
import Poems from './Poems'

import {getPoems} from '../api'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      poems: [],
      errorMessage: ''
    }
    this.fetchPoems = this.fetchPoems.bind(this)
  }

  componentDidMount () {
    this.fetchPoems()
  }

  fetchPoems () {
    return getPoems()
      .then(poems => {
        this.setState({poems})
      })
      .catch(err => {
        this.setState({errorMessage: err.message})
      })
  }

  render () {
    return (
      <div>
        <Header />
        <Poems poems={this.state.poems} />
      </div>
    )
  }
}

export default App
