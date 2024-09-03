import React, {useState, useEffect} from 'react';
import placesData from '../placesData'
import PlaceContainer from "./PlaceContainer"
import Map from "./Map"

const MainContainer = () => {
    const [map, setMap] = useState(null);
    const [autocomplete, setAutocomplete] = useState(null);
    const [markers, setMarkers] = useState([]);
    const [places, setPlaces] = useState(placesData);
    const [uniquePlaceId, setUniquePlaceId] = useState(placesData.length);

    async function initMaps() {
        let map = await new window.google.maps.Map(document.getElementById("map"), {
            center: {lat: 40.35355, lng: -50.447616},
            zoom: 3,
        });
        map.setOptions({minZoom: 3, maxZoom: 15})

        let autocomplete = new window.google.maps.places.Autocomplete(document.getElementById("searchBar"))    
        autocomplete.setFields(['address_components', 'formatted_address']);

        const markers = places.map((place) => {
            return addMarker(place, map)
        });
        
        setMap(map);
        setAutocomplete(autocomplete);
        setMarkers(markers);
    }

    useEffect(() => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCqg_-lwa3fsOr7a1cDpkr1RJMet2nwXQE&language=en&loading=async&libraries=places&callback=initMaps")
        window.initMaps = initMaps;
    },[]);

    const addMarker = (place, map) => {
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

        setMarkers([...markers, marker])
        return marker;
    }

    const removeMarker = (id) => {
        const currentMarkers = [...markers]
        const updatedMarkers = currentMarkers.filter((element)=>{
            if(element.id === id){
                element.marker.setMap(null)
                return false
            }
            return true
        })
        return updatedMarkers
    }

    const handleAddPlace = (placeData) => {
        let place = {
            id: uniquePlaceId+1,
            name: placeData.name,
            pos: placeData.pos
        }
        const updatedPlaces = [...places, place]

        setUniquePlaceId(uniquePlaceId+1);
        setPlaces(updatedPlaces);
        addMarker(place, map);
    }

    const handleDeletePlace = (index) => {
        const updatedPlaces = [...places];
        const updatedMarkers = removeMarker(updatedPlaces[index].id);

        updatedPlaces.splice(index, 1);

        setPlaces(updatedPlaces);
        setMarkers(updatedMarkers);
    }

    return(
        <main>
          <PlaceContainer 
              map={map}
              autocomplete={autocomplete}
              places={places}
              handleAddPlace={handleAddPlace}
              handleDeletePlace={handleDeletePlace}
          />
          <Map
              map={map}
              places={places}
              markers={markers}
          />
        </main>
      )
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