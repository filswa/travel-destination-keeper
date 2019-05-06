import React from "react"

function Place(props) {
    return (
        <div className="place">
            <p>
              {props.name}
              <button onClick={props.handleDelete} style={{position: 'absolute', right: '15%'}}>X</button>
            </p>
        </div>
    )
}

export default Place
