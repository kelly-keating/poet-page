import React from 'react'

import SearchResults from './SearchResults'

import {searchByCategory} from '../api/poetryApi'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
            results: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.search = this.search.bind(this)
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    search(category) {
        searchByCategory(category, this.state.text)
            .then(results => {
                if(results.status != 404) {
                    this.setState({results})
                }
            })
    }

    render() {
        const style = {"color": "black"}
        return (
            <div style={style}>
                <input type="text" value={this.state.text} onChange={this.handleChange} />
                <button onClick={() => this.search('author')}>Search Author</button>
                <button onClick={() => this.search('title')}>Search Title</button>
                {this.state.results.length ? <SearchResults results={this.state.results} /> : null}
            </div>
        )
    }
}

export default Search
