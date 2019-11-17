import React from 'react'

import SearchResults from './SearchResults'

import {searchByCategory} from '../api/poetryApi'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
            category: 'author',
            results: []
        }
        this.setText = this.setText.bind(this)
        this.setCategory = this.setCategory.bind(this)
        this.search = this.search.bind(this)
    }

    setText(e) {
        this.setState({
            text: e.target.value
        })
    }

    setCategory(e) {
        this.setState({
            category: e.target.value
        })
    }

    search(category) {
        searchByCategory(this.state.category, this.state.text)
            .then(results => {
                if(results.status == 404) {
                    results = []
                }
                this.setState({results})
            })
    }

    render() {
        const formStyle = {"color": "black"}
        const dropdownStyle = {"max-width": "fit-content"}
        return (
            <div style={formStyle}>

                <div class="input-group">
                    <select class="input-group-field" style={dropdownStyle} onChange={this.setCategory}>
                        <option value="author">Search Author</option>
                        <option value="title">Search Title</option>
                        <option value="lines">Search Content</option>
                        {/* <option value="all">Search Everything</option> */}
                    </select>

                    <input class="input-group-field" type="text" value={this.state.text} onChange={this.setText} />
                    
                    <div class="input-group-button">
                        <input type="submit" class="button" value="Search" onClick={this.search} />
                    </div>
                </ div>

                {/* <button onClick={() => this.search('author')}>Search Author</button> */}
                {/* <button onClick={() => this.search('title')}>Search Title</button> */}
                {this.state.results.length ? <SearchResults results={this.state.results} /> : null}
            </ div>
        )
    }
}

export default Search
