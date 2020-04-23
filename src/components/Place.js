import React from "react"

const Place = (props) => {
    return (
        <div className="place">
            <p  style={{cursor: "pointer"}}
                onClick={() => {
                    let currentZoom = props.map.getZoom()
                    let offset = 0;
                    if(currentZoom > 8){
                        setTimeout(()=>{
                            props.map.setZoom(8)
                        })
                    } else {offset = 900}
                    if(currentZoom > 4){
                        setTimeout(()=>{
                            props.map.setZoom(4)
                        }, 900-offset)                        
                    } else {offset = 1600}
                    setTimeout(() => {
                        props.map.panTo(props.pos)
                    }, 1700-offset)
                    setTimeout(() => {
                        props.map.setZoom(8)
                    }, 2600-offset)
                    setTimeout(() => {
                        props.map.setZoom(12)
                    }, 3500-offset)
                }
            }>
              {props.name}
              <button onClick={props.handleDelete} style={{position: 'absolute', right: '12%'}}>X</button>
            </p>
        </div>
    )
}

export default Place