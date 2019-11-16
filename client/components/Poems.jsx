import React from 'react'

function Poems({poems, clickFn}) {
    return poems.map(poem => <h3 onClick={() => clickFn(poem.id)}>{poem.title}</h3>)
}

export default Poems
