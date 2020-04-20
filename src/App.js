import React from 'react';
import './App.css';

import PlaceContainer from "./components/PlaceContainer"
import Map from "./components/Map"


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      map: null,
      autocomplete: null
    }
  }

  componentDidMount(){
    this.renderMap();
  }

  initMaps = () => {
    let map = new window.google.maps.Map(document.getElementById("map"), {
        center: {lat: 35.896860, lng: 14.447616},
        zoom: 12
      });

    let autocomplete = new window.google.maps.places.Autocomplete(document.getElementById("searchBar"))
    
    this.setState({
      map: map,
      autocomplete: autocomplete
    })
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCqg_-lwa3fsOr7a1cDpkr1RJMet2nwXQE&libraries=places&callback=initMaps")
    window.initMaps = this.initMaps
  }

  render(){
    return(
      <main>
          <PlaceContainer googleCallbackName={this.initMaps}/>
          <Map map={this.state.map}/>
      </main>
    )
  }
}

export default App

function loadScript(url){
  let index = window.document.getElementsByTagName("script")[0]
  let script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}