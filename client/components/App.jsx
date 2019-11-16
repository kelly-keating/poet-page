import React from 'react'

import Header from './Header'
import Poems from './Poems'
import FullPoem from './FullPoem'

import {getPoems} from '../api'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      poems: [],
      activePoem: null,
      errorMessage: ''
    }
    this.setActive = this.setActive.bind(this)
    this.deactivate = this.deactivate.bind(this)
    this.fetchPoems = this.fetchPoems.bind(this)
  }

  componentDidMount () {
    this.fetchPoems()
  }

  setActive (id) {
    let activePoem = this.state.poems.find(poem => poem.id == id)
    this.setState({activePoem})
  }

  deactivate () {
    this.setState({
      activePoem: null
    })
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
        <Poems poems={this.state.poems} clickFn={this.setActive} />
        {this.state.activePoem && <FullPoem poem={this.state.activePoem} closeFn={this.deactivate} />}
      </div>
    )
  }
}

export default App
