import React from "react"

const Place = (props) => {
    return (
        <div className="place">
            <p  style={{cursor: "pointer", width: '100%'}}
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
                    if(currentZoom > 3){
                        setTimeout(()=>{
                            props.map.setZoom(2)
                        }, 1600-offset)
                    } else {offset = 1900}
                    setTimeout(() => {
                        props.map.panTo(props.pos)
                    }, 2000-offset)
                    setTimeout(() => {
                        props.map.setZoom(4)
                    }, 2900-offset)
                    setTimeout(() => {
                        props.map.setZoom(8)
                    }, 3200-offset)
                    setTimeout(() => {
                        props.map.setZoom(12)
                    }, 4100-offset)
                }
            }>
              {props.name}              
            </p>
            <button className="xButton" onClick={props.handleDelete} style={{position: 'relative', border: '0px', background: 'none', marginTop: '2%', left: '5%'}}>X</button>
        </div>
    )
}

export default Place