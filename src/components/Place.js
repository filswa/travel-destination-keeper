import React from "react"

const Place = ({map, name, pos, handleDelete}) => {
    return (
        <div className="place">
            <p  style={{cursor: "pointer", width: '100%'}}
                onClick={() => {
                    let currentZoom = map.getZoom()
                    let offset = 0;
                    if(currentZoom > 8){
                        setTimeout(()=>{
                            map.setZoom(8)
                        })
                    } else {offset = 900}
                    if(currentZoom > 4){
                        setTimeout(()=>{
                            map.setZoom(4)
                        }, 900-offset)
                    } else {offset = 1600}
                    if(currentZoom > 3){
                        setTimeout(()=>{
                            map.setZoom(2)
                        }, 1600-offset)
                    } else {offset = 1900}
                    setTimeout(() => {
                        map.panTo(pos)
                    }, 2000-offset)
                    setTimeout(() => {
                        map.setZoom(4)
                    }, 2900-offset)
                    setTimeout(() => {
                        map.setZoom(8)
                    }, 3200-offset)
                    setTimeout(() => {
                        map.setZoom(12)
                    }, 4100-offset)
                }
            }>
              {name}              
            </p>
            <button className="xButton" onClick={handleDelete} style={{position: 'relative', border: '0px', background: 'none', marginTop: '2%', left: '5%'}}>X</button>
        </div>
    )
}

export default Place