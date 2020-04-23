import React from 'react'

class Map extends React.Component{
	constructor(props){
		super(props)
		this.state={
      map: this.props.map,
    }
	}

	componentDidMount(){
		setTimeout(()=>{
			this.setState({
				map: this.props.map
      });
		}, 1000)
  }
  
	render(){
		return(
			<div>
        <div id="map">
          
        </div>
      </div>      
		)
	}
}

export default Map