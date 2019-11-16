import React from 'react'

import Header from './Header'
import Footer from './Footer'
import AppRoutes from './AppRoutes'

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
      <div id='layout' className='pure-g'>
        <div className='sidebar pure-u-1 pure-u-md-1-4'>
          <Header />
        </div>
        <div className='content pure-u-1 pure-u-md-3-4'>
          {/* <AppRoutes
            posts={this.state.posts}
            fetchPoems={this.fetchPoems}
          /> */}
          {this.state.errorMessage &&
            <h1>{this.state.errorMessage}</h1>
          }
        </div>
        <div className='content pure-u-1 pure-u-md-3-4'>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
