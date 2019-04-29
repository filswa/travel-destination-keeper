import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(){
    super()
    this.state = {}
  }

  componentDidMount(){
    this.renderMap()
  }

  initMap = () => {
    let map = new window.google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCfYxH4JekimPUiO1gqHgvVSLI951bz0b8&callback=initMap")
    window.initMap = this.initMap
  }

  render(){
    return(
      <main>
        <div id="map"></div>
      </main>
    )
  }
}

function loadScript(url){
  let index = window.document.getElementsByTagName("script")[0]
  let script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default App
