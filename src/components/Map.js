import React from 'react'

class Map extends React.Component{
	constructor(props){
		super(props)
		this.state={
      map: this.props.map
    }
	}

  // componentDidMount(){
  //   this.renderMap()
  // }


  // initMap = () => {
  //   let map = new window.google.maps.Map(document.getElementById("map"), {
  //       center: {lat: 35.896860, lng: 14.447616},
  //       zoom: 12
  //     });
  // }

  // renderMap = () => {
  //   loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCfYxH4JekimPUiO1gqHgvVSLI951bz0b8&libraries=places&callback=initMap")
  //   window.initMap = this.initMap
  // }

	render(){
		return(
			<div id="map"></div>
		)
	}
}

export default Map

// function loadScript(url){
//   let index = window.document.getElementsByTagName("script")[0]
//   let script = window.document.createElement("script")
//   script.src = url
//   script.async = true
//   script.defer = true
//   index.parentNode.insertBefore(script, index)
// }
