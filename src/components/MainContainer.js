import React from 'react';

import PlaceContainer from "./PlaceContainer"
import Map from "./Map"

class MainContainer extends React.Component {
    constructor(){
        super()
        this.state = {
          map: null,
          autocomplete: null
        }
      }
    
      componentWillMount(){
        this.loadMaps();
      }
    
      initMaps = () => {
        let map = new window.google.maps.Map(document.getElementById("map"), {
            center: {lat: 35.896860, lng: 14.447616},
            zoom: 12
          });
    
        let autocomplete = new window.google.maps.places.Autocomplete(document.getElementById("searchBar"))    
        autocomplete.setFields(['address_components', 'formatted_address']);
            
        this.setState({
          map: map,
          autocomplete: autocomplete
        })
      }
    
      loadMaps = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCqg_-lwa3fsOr7a1cDpkr1RJMet2nwXQE&libraries=places&callback=initMaps")
        window.initMaps = this.initMaps
      }
    
      render(){
        return(
          <main>
              <PlaceContainer autocomplete={this.state.autocomplete}/>
              <Map map={this.state.map}/>
          </main>
        )
      }
}

export default MainContainer

function loadScript(url){
    let index = window.document.getElementsByTagName("script")[0]
    let script = window.document.createElement("script")
    script.src = url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
  }