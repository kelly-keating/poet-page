import React from 'react'

function FullPoem({poem, closeFn}) {
    // this css lets you use \n
    const style = {'white-space': 'pre-wrap'} 
    return (
        <div style={style}>
            <h2>{poem.title}</h2>
            <h5>{poem.author}</h5>
            <p>{poem.lines.join('\n')}</p>
            <p onClick={closeFn}>Close</p>
        </div>
    )
}

export default FullPoem
