import React from 'react'

function Poems({poems}) {
    return poems.map(poem => <h3>{poem.title}</h3>)
}

export default Poems
