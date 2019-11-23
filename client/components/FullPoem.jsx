import React from 'react'

function FullPoem({poem, closeFn}) {
    // this css lets you use \n
    const style = {"whiteSpace": "pre-wrap", "minWidth": "300px", "maxWidth": "fit-content"} 
    return (
        <div className="card" style={style}>
            <div className="card-section">
                <h2>{poem.title}</h2>
                <h5>{poem.author}</h5>
                <p>{poem.lines.join('\n')}</p>
                <p onClick={closeFn}>Close</p>
            </div>
        </div>
    )
}

export default FullPoem


{/* <div class="card" style="width: 300px;">
  <div class="card-divider">
    This is a header
  </div>
  <img src="assets/img/generic/rectangle-1.jpg">
  <div class="card-section">
    <h4>This is a card.</h4>
    <p>It has an easy to override visual style, and is appropriately subdued.</p>
  </div>
</div> */}