import React from 'react';
import placesData from '../placesData'
import PlaceContainer from "./PlaceContainer"
import Map from "./Map"

class MainContainer extends React.Component {
    constructor(){
        super()
        this.state = {
          map: null,
          autocomplete: null,
          markers: [],
          uniquePlaceId: 4,
          places: placesData
        }
        this.loadMaps();
    }

    // Google Maps Init
    initMaps = () => {
        let map = new window.google.maps.Map(document.getElementById("map"), {
            center: {lat: 43.896860, lng: 20.447616},
            zoom: 4,
        });
        map.setOptions({minZoom: 3, maxZoom: 15})

        let autocomplete = new window.google.maps.places.Autocomplete(document.getElementById("searchBar"))    
        autocomplete.setFields(['address_components', 'formatted_address']);

        const markers = this.state.places.map((place) => {
            return this.addMarker(place, map)
        })
        
        this.setState({
            map: map,
            autocomplete: autocomplete,
            markers: markers
        },)
    }

    loadMaps = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCqg_-lwa3fsOr7a1cDpkr1RJMet2nwXQE&language=en&libraries=places&callback=initMaps")
        window.initMaps = this.initMaps
    }

    // Marker handling functions
    addMarker = (place, map) => {
        let marker = {
            id: place.id,
            marker: new window.google.maps.Marker({
                position: place.pos,
                map: map,
                title: place.name
            })
        }

        marker.marker.addListener('click', () => {
            if(marker.infowindow) marker.infowindow.close()

            marker.infowindow = new window.google.maps.InfoWindow({
                content: place.name + `, lat: ${place.pos.lat}, lon: ${place.pos.lng}`
                });
            marker.infowindow.open(map, marker.marker);
            map.panTo(place.pos)
        });

        this.setState(prevState => ({
            markers: [...prevState.markers, marker]
        }))
        return marker;
    }

    removeMarker = (id) => {
        console.log(id)
        const markers = [...this.state.markers]
        const updatedMarkers = markers.filter((element)=>{
            if(element.id === id){
                element.marker.setMap(null)
                return false
            }
            return true
        })
        return updatedMarkers
    }

    // Places state handling functions
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({ [name]: value})
    }

    handleAddPlace = (placeData) => {
        let place = {
            id: this.state.uniquePlaceId,
            name: placeData.name,
            pos: placeData.pos
        }
        const updatedPlaces = [...this.state.places, place]

        this.setState({
            uniquePlaceId: this.state.uniquePlaceId + 1,
            places: updatedPlaces
        }, () => this.addMarker(place, this.state.map))
    }

    handleDeletePlace = (index) => {
        const updatedPlaces = [...this.state.places]
        const updatedMarkers = this.removeMarker(updatedPlaces[index].id)

        updatedPlaces.splice(index, 1)

        this.setState({
            places: updatedPlaces,
            markers: updatedMarkers
        })
    }
    
      render(){
        return(
          <main>
            <PlaceContainer 
                map={this.state.map}
                autocomplete={this.state.autocomplete}
                places={this.state.places}
                handleAddPlace={this.handleAddPlace}
                handleDeletePlace={this.handleDeletePlace}
            />
            <Map
                map={this.state.map}
                places={this.state.places}
                markers={this.state.markers}
            />
          </main>
        )
      }
}

export default MainContainer

function loadScript(url){
    let index = window.document.getElementsByTagName("script")[0]
    let script = window.document.createElement("script")
    script.src = url
    script.async = false
    script.defer = false
    index.parentNode.insertBefore(script, index)
  }