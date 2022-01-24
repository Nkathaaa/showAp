import React from 'react'

function Test2(props) {
    return (
        <div>
            <h2>Child</h2>
            <button onClick={()=>props.changewords('tty')}>Click to change title</button>
        </div>
    )
}

export default Test2
