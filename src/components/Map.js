import React from 'react'

class Map extends React.Component{
	constructor(props){
		super(props)
		this.state={
      map: this.props.map
    }
	}

	componentDidMount(){
		setTimeout(()=>{
			this.setState({
				map: this.props.map
			});
		}, 500)
	}

	render(){
		return(
			<div id="map"></div>
		)
	}
}

export default Map