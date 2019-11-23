import React from 'react'

function Poems({poems, clickFn}) {
    return poems.map((poem, i) => <h3 key={"poem-" + i} onClick={() => clickFn(poem.id)}>{poem.title}</h3>)
}

export default Poems
