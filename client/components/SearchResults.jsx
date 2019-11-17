import React from 'react'

class Results extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 1
        }
    }

    render(){
        return (
            <div>
                {this.props.results.length + " things match"}
            </div>
        )
    }
}

export default Results
