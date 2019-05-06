import React from 'react';
import Place from './Place'

class PlaceContainer extends React.Component {

	constructor() {
		super();
		this.state = {
      uniquePlaceId: 4,
			places: [
        {
          id: 1,
          name: "La Valette, Malta",
          pos: {lat: 35.896166, lon: 14.509160}
        },
        {
          id: 2,
          name: "Morijim, Goa, India",
          pos: {lat: 15.620607, lon: 73.731076}
        },
        {
          id: 3,
          name: "Marmaris, Turkey",
          pos: {lat: 36.850528, lon: 28.278004}
        }
      ]
		}
	}

  // Not working, beacuse searchBar text value is stored in SearchBar's state
  // TODO: design better partent/child startegy
  handleAddPlace = (event) => {
    const {value} = event.target
    console.log(value)
    const updatedPlaces = this.state.places.concat({
      id: this.state.uniquePlaceId,
      name: "Your favourite place :)",
      // pos value hardcoded for now, to be replaced with data from googleMapsAPI
      pos: {lat: 51.476883, lon: 0.0}
    })

    this.setState({
      uniquePlaceId: this.state.uniquePlaceId+1,
      places:updatedPlaces
    })
  }

  handleDelete = (index) => {
    const places = Object.assign([], this.state.places)
    places.splice(index, 1)
    this.setState({places:places})
  }

  render(){
  	const places =
  		this.state.places.map((place, index) =>
  			<Place
  				key={place.id}
  				name={place.name}
          pos={place.pos}
          handleDelete={this.handleDelete.bind(this, index)}
  			/>)

  	return (
        <div className="places">
          <h1>Places to Visit</h1>
          {places}
        <button
          id="addButton"
          type="submit"
          onClick={this.handleAddPlace}
        >Add</button>
        </div>
  	)
  }
}
export default PlaceContainer;
