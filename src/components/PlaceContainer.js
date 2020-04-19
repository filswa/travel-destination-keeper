import React from 'react';
import Place from './Place'

class PlaceContainer extends React.Component {

	constructor() {
		super();
		this.state = {
      searchText: "BIESZCZADY",
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
  
	handleChange = (event) => {
		const {name, value} = event.target
		this.setState({ [name]: value})
	}

  handleAddPlace = () => {
    const updatedPlaces = this.state.places.concat({
      id: this.state.uniquePlaceId,
      name: this.state.searchText,
      // pos value hardcoded for now, to be replaced with data from googleMapsAPI
      pos: {lat: 51.476883, lon: 0.0}
    })

    this.setState({
      searchText: "",
      uniquePlaceId: this.state.uniquePlaceId + 1,
      places: updatedPlaces
    })
  }

  handleDeletePlace = (index) => {
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
          handleDelete={this.handleDeletePlace.bind(this, index)}
  			/>)

  	return (
      <div>
        <div id="searchBarDiv">
          <input
            id="searchBar"
            type="search"
            name="searchText"
            placeholder="Search for place..."
            value={this.state.searchText}
            onChange={this.handleChange}
          />
          
          <button
            id="addButton"
            type="submit"
            onClick={this.handleAddPlace}
          >Add</button>
			  </div>
      
        <div className="places">
          <h1>Places to Visit</h1>
          {places}
        </div>
      </div>
  	)
  }
}
export default PlaceContainer;
