import React from 'react'

class Map extends React.Component{
	constructor(){
		super()
		this.state={}
	}

  componentDidMount(){
    this.renderMap()
  }


  initMap = () => {
    let map = new window.google.maps.Map(document.getElementById("map"), {
        center: {lat: 50, lng: 20},
        zoom: 8
      });
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCfYxH4JekimPUiO1gqHgvVSLI951bz0b8&callback=initMap&libraries=places")
    window.initMap = this.initMap
  }

	render(){
		return(
			<div id="map"></div>
		)
	}
}

export default Map

function loadScript(url){
  let index = window.document.getElementsByTagName("script")[0]
  let script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}
